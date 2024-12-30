const http = require('http');
const https = require('https');
const dns = require('dns/promises');
const net = require('net');
const tls = require('tls');

// Fungsi untuk mengecek status server
const checkServerStatus = (url) => {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, (res) => {
            resolve(`Server ${url} aktif. Status: ${res.statusCode}.`);
        }).on('error', (err) => {
            reject(`Server ${url} tidak dapat dijangkau. Kesalahan: ${err.message}`);
        });
    });
};

// Fungsi untuk mengecek waktu respons server
const checkServerResponseTime = (url) => {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        const startTime = Date.now(); // Waktu mulai
        protocol.get(url, (res) => {
            const duration = Date.now() - startTime; // Hitung durasi
            resolve(`Server ${url} aktif. Status: ${res.statusCode}. Waktu respons: ${duration} ms.`);
        }).on('error', (err) => {
            reject(`Server ${url} tidak dapat dijangkau. Kesalahan: ${err.message}`);
        });
    });
};

// Fungsi untuk mendapatkan alamat IP dari domain
const checkIP = async (domain) => {
    try {
        const addresses = await dns.resolve4(domain);
        return `Alamat IP untuk ${domain} adalah: ${addresses.join(', ')}.`;
    } catch (error) {
        throw new Error(`Gagal mendapatkan alamat IP untuk ${domain}. Kesalahan: ${error.message}`);
    }
};

// Fungsi untuk melakukan ping ke server
const pingServer = (host) => {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const socket = net.createConnection(80, host, () => {
            const duration = Date.now() - startTime;
            socket.end();
            resolve(`Ping ke ${host} berhasil. Waktu respons: ${duration} ms.`);
        });

        socket.on('error', (err) => {
            reject(`Ping ke ${host} gagal. Kesalahan: ${err.message}`);
        });
    });
};

// Fungsi untuk mengecek status port
const checkPortStatus = (host, port) => {
    return new Promise((resolve, reject) => {
        const socket = new net.Socket();
        socket.setTimeout(3000);

        socket.on('connect', () => {
            socket.destroy();
            resolve(`Port ${port} pada ${host} terbuka.`);
        });

        socket.on('timeout', () => {
            socket.destroy();
            reject(`Port ${port} pada ${host} tertutup (timeout).`);
        });

        socket.on('error', (err) => {
            socket.destroy();
            reject(`Port ${port} pada ${host} tertutup. Kesalahan: ${err.message}`);
        });

        socket.connect(port, host);
    });
};

// Fungsi untuk mengecek sertifikat SSL
const checkSSLCertificate = (url) => {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);

        const options = {
            host: parsedUrl.hostname,
            port: 443,
            method: 'GET',
            rejectUnauthorized: false,
        };

        const req = tls.connect(options, () => {
            const cert = req.getPeerCertificate();
            if (req.authorized) {
                resolve(`Sertifikat SSL valid hingga ${cert.valid_to}`);
            } else if (cert) {
                resolve(`Sertifikat SSL tidak valid. Kadaluarsa pada ${cert.valid_to}`);
            } else {
                reject('Tidak dapat mendapatkan sertifikat SSL.');
            }
            req.end();
        });

        req.on('error', (err) => {
            reject(`Kesalahan saat mengecek sertifikat SSL: ${err.message}`);
        });
    });
};

module.exports = {
    checkServerStatus,
    checkServerResponseTime,
    checkIP,
    pingServer,
    checkPortStatus,
    checkSSLCertificate,
};
