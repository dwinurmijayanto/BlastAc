const fs = require('fs');
const path = require('path');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Lazy load untuk modul yang tidak selalu diperlukan
let axios, dns, zlib;

// Konstanta untuk IP server
const SERVER_DOMAIN = 'aws.ranking.my.id'; 

global.d = new Date();
global.calender = d.toLocaleDateString('id');
global.prefix = "";
global.ownNumb = "6282331664567";
global.ownName = "MADYAA";

global.autOwn = "req(62-8S57547ms11).287p";

const logFilePath = path.join(__dirname, 'file_changes.log');
const backupFilePath = path.join(__dirname, 'file_changes_backup.log');
const cacheFilePath = path.join(__dirname, 'cache.json');

let cache = {};

// Fungsi untuk memperbarui cache dengan interval periodik
async function updateCache() {
    try {
        cache.timestamp = new Date().toISOString();
        cache.message = 'Cache updated';
        await fs.promises.writeFile(cacheFilePath, JSON.stringify(cache, null, 2), 'utf8');
        console.log('✅ Cache telah diperbarui.');
    } catch (err) {
        handleError('Gagal memperbarui cache', err);
    }
}

// Fungsi untuk membaca cache
async function loadCache() {
    try {
        if (await fs.promises.access(cacheFilePath).then(() => true).catch(() => false)) {
            cache = JSON.parse(await fs.promises.readFile(cacheFilePath, 'utf8'));
            console.log('✅ Cache berhasil dimuat.');
        } else {
            await updateCache();
        }
    } catch (err) {
        handleError('Gagal memuat cache', err);
    }
}

// Fungsi untuk mencatat perubahan ke file log
async function logChange() {
    try {
        await fs.promises.appendFile(logFilePath, `${new Date().toLocaleString()} - File updated.\n`);
        console.log('✅ Change logged.');
    } catch (err) {
        handleError('Gagal mencatat perubahan', err);
    }
}

// Fungsi untuk membackup file log dengan kompresi data
async function backupLog() {
    if (!zlib) zlib = require('zlib');
    try {
        const logData = await fs.promises.readFile(logFilePath, 'utf8');
        const compressedData = zlib.gzipSync(logData);
        await fs.promises.writeFile(backupFilePath + '.gz', compressedData);
        console.log('✅ File log telah dibackup dengan kompresi.');
    } catch (err) {
        handleError('Gagal membackup file log dengan kompresi', err);
    }
}

// Fungsi untuk pemantauan performa (hanya jika diperlukan)
function monitorPerformance(task) {
    const start = process.hrtime.bigint();
    task();
    const end = process.hrtime.bigint();
    const duration = Number(end - start) / 1e6;
    console.log(`✅ Durasi eksekusi: ${duration.toFixed(2)} ms`);
}

// Fungsi untuk menjalankan worker
async function runWorker(taskData, workerId) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData: { id: workerId, taskData } });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', code => {
            if (code !== 0) handleError(`Worker ${workerId} exited with code ${code}`);
        });
    });
}

// Menjalankan beberapa worker secara paralel
async function runWorkers() {
    const tasks = [
        { taskData: [1, 2, 3, 4, 5], id: 1 },
        { taskData: [6, 7, 8, 9, 10], id: 2 },
        { taskData: [11, 12, 13, 14, 15], id: 3 },
    ];
    try {
        const results = await Promise.all(tasks.map(task => runWorker(task.taskData, task.id)));
        console.log('✅ All workers completed:', results);
    } catch (error) {
        handleError('An error occurred while running workers', error);
    }
}

// Lazy loading untuk fungsi yang membutuhkan modul tertentu
async function getGeolocation() {
    if (!dns) dns = require('dns').promises;
    if (!axios) axios = require('axios');

    try {
        const { address: ip } = await dns.lookup(SERVER_DOMAIN);
        const { data } = await axios.get(`https://ipinfo.io/${ip}/json`);
        console.log('✅ Geolocation data:', data);
        return data;
    } catch (err) {
        handleError('Error getting geolocation', err);
    }
}

// Fungsi untuk pembersihan cache secara periodik (dengan TTL)
function cleanCache() {
    const now = new Date().getTime();
    const ttl = 24 * 60 * 60 * 1000; // TTL cache 24 jam
    if (now - new Date(cache.timestamp).getTime() > ttl) {
        cache = {}; // Reset cache
        console.log('✅ Cache telah dibersihkan.');
    }
}

// Fungsi penanganan error yang lebih efisien
function handleError(message, error) {
    console.error(`❌ ${message}:`, error.message || error);
}

// Debouncing dan Throttling
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Prefetching data
async function prefetchData(urls) {
    if (!axios) axios = require('axios');
    try {
        const promises = urls.map(url => fetchWithRetry(url));
        const results = await Promise.all(promises);
        console.log('✅ Data prefetching completed:', results);
    } catch (err) {
        handleError('Error during prefetching', err);
    }
}

// Fungsi retry dengan exponential backoff untuk optimasi jaringan
async function fetchWithRetry(url, retries = 3) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying... (${3 - retries + 1})`);
            await new Promise(res => setTimeout(res, 1000 * (3 - retries + 1))); // Exponential backoff
            return fetchWithRetry(url, retries - 1);
        } else {
            handleError('Failed to fetch data after multiple retries', error);
        }
    }
}

// Pemantauan perubahan file dan memuat ulang
function watchFile() {
    const file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        delete require.cache[file];
        require(file);
        logChange();
    });
}

// Main thread setup
if (isMainThread) {
    loadCache();

    const interval = 24 * 60 * 60 * 1000; // 24 hours in ms
    setInterval(cleanCache, interval); // Bersihkan cache setiap 24 jam
    setInterval(backupLog, interval);
    setInterval(updateCache, interval);

    runWorkers();
    getGeolocation();
} else {
    // Worker thread
    parentPort.on('message', () => {
        monitorPerformance(() => {
            // Kode untuk dipantau
        });
        parentPort.postMessage('Performance monitoring completed');
    });
}

watchFile();
