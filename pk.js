require('./config')
const axios = require('axios'); // Add axios here
const { getMimeType } = require('./utils'); // Add a utility function to get MIME type
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const ncp = require('ncp').ncp;
const archiver = require('archiver');
const puppeteer = require('puppeteer');
const FormData = require('form-data');
const { downloadMediaMessage, generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@whiskeysockets/baileys');
const crypto = require('crypto'); 
function generateUniqueCode() {
    return crypto.randomBytes(4).toString('hex').toUpperCase(); // 8 digit heksadesimal
}
// Logging function to include unique code
function logDelivery(name, number, status, uniqueCode) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const record = { time, name, number, status, uniqueCode };
    
    let data = [];
    try {
        const fileData = fs.readFileSync('kirim.json', 'utf8');
        data = JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading kirim.json:', error);
    }

    data.push(record);

    try {
        fs.writeFileSync('kirim.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing to kirim.json:', error);
    }
}

const cache = {}; // Example object to represent your cache

// Function to clear cache
const clearCache = () => {
    for (const key in cache) {
        delete cache[key]; // Menghapus setiap item cache
    }
    return 'Cache cleared successfully.';
};

const deleteCacheFolder = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.rmdirSync(folderPath, { recursive: true });
        return true;
    }
    return false;
};


const {
    getGroupAdmins,
    jsonformat,
    runtime,
    sleep
} = require('./function')





// STATISTIK GRUP
const { updateGroupStats, getGroupStats, resetGroupStats } = require('./groupStats'); // Pastikan resetGroupStats ada di sini


// Object to keep track of scheduled jobs
const { handleScheduleRecurringAction, handleShowSchedule, handleDeleteSchedule, handleEditSchedule } = require('./scheduleCommands');
// MODULE
module.exports = pk = async (pk, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : 
                    (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : 
                 (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : 
                    (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : 
                     (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : 
                    (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : 
                   (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : 
                    (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const botId = await pk.decodeJid(pk.user.id)
        const botNumber = botId.split('@')[0]
        const ownId = ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        const ownNumber = ownNumb.replace(/[^0-9]/g, '')
        const dtext = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const groupMetadata = m.isGroup ? await pk.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botId) : false
        var isAuthor = autOwn.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
        var isOwner = ownId.includes(m.sender)
        var isMe = botId.includes(m.sender)
        var isCreator = isOwner || isAuthor || isMe

        const reply = (text) => {
            pk.sendMessage(m.chat, { text: text.toString() }, { quoted: m })
        }

// Fungsi untuk mengirim pesan ke owner/admin
const replyOwner = async (text, m) => {
    try {
        await pk.sendMessage('6282331664567@s.whatsapp.net', { text: text.toString() }, { quoted: m });
    } catch (error) {
        console.error('Gagal mengirim pesan ke owner/admin:', error);
    }
};
        
        const replyanita = async (text, m) => {
    try {
        await pk.sendMessage('6281232612555@s.whatsapp.net', { text: text.toString() }, { quoted: m });
    } catch (error) {
        console.error('Gagal mengirim pesan ke owner/admin:', error);
    }
};
        
const replyown3r = (text) => {
            pk.sendMessage('6282331664567@s.whatsapp.net', { text: text.toString() }, { quoted: m });
        }
        
        const ms = require('ms'); // Tambahkan ini di bagian atas file Anda
        
        // Function to delete messages after a timeout
       const autoDeleteMessage = async (msgId, timeout) => {
            setTimeout(() => {
                pk.sendMessage(m.chat, { delete: msgId });
            }, timeout);
        }

       
 // Confess feature
const handleConfees = (chat, args) => {
    if (args.length < 2) {
        reply('Please provide a target number (62) and the confession text.');
        return;
    }

    const targetNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Ambil nomor target
    const confession = args.slice(1).join(' '); // Ambil teks pengakuan

    // Kirim pengakuan ke nomor tujuan
    pk.sendMessage(targetNumber, { text: confession });
    
    // Ambil waktu saat pesan dikirim
    const sentTime = new Date().toLocaleTimeString(); // Format waktu sesuai kebutuhan Anda

    // Beri tahu pengirim bahwa pengakuan telah dikirim
    reply(`Your message has been sent:\n\n"${confession}"\n\nSent at: ${sentTime}`);
};

        // Function to delete .cache folder
        const deleteCacheFolder = (folderPath) => {
            if (fs.existsSync(folderPath)) {
                fs.rmSync(folderPath, { recursive: true, force: true });
                return true;
            } else {
                return false;
            }
        }       
        
                // Schedule the deletion of .cache folder every 24 hours
        setInterval(() => {
            const cacheFolderPath = path.join(__dirname, '.cache')
            if (deleteCacheFolder(cacheFolderPath)) {
                console.log('.cache folder deleted successfully.')
            } else {
                console.log('.cache folder does not exist.')
            }
        }, 24 * 60 * 60 * 1000) // 24 hours in milliseconds


        const reactionMessage = {
            react: {
                text: "💖", // use an empty string to remove the reaction
                key: m.key
            }
        };

        // Fitur Pengumuman Otomatis untuk Anggota Baru
const welcomeMessage = "Selamat datang di grup! Jangan lupa perkenalkan diri dan baca peraturan grup.";

// Periksa apakah ada peserta baru yang bergabung
if (m.messageStubType === 27) { // 27 adalah kode untuk peserta baru yang ditambahkan
    const newParticipants = m.messageStubParameters;
    for (let participant of newParticipants) {
        pk.sendMessage(m.chat, { text: `@${participant.split('@')[0]} ${welcomeMessage}`, mentions: [participant] });
    }
}
        
        // CONST KATALOG

const catalogFilePath = './catalog.json'; // Path untuk file katalog

const saveCatalog = () => {
    fs.writeFileSync(catalogFilePath, JSON.stringify(catalog, null, 2), 'utf8');
    console.log('Katalog berhasil disimpan.');
};

const loadCatalog = () => {
    if (fs.existsSync(catalogFilePath)) {
        const data = fs.readFileSync(catalogFilePath, 'utf8');
        catalog = JSON.parse(data);
        console.log('Katalog berhasil dimuat.');
    } else {
        console.log('File katalog tidak ditemukan, membuat file baru.');
        catalog = {}; // Inisialisasi katalog kosong jika file tidak ditemukan
    }
};

// Panggil loadCatalog saat aplikasi dimulai
loadCatalog();
 
// CONST ORDER
// ID owner yang diizinkan
const ownerId = '6282331664567@s.whatsapp.net';
// Fungsi untuk memeriksa apakah pengguna adalah admin grup
const isAdmin = (jid, groupAdmins) => groupAdmins.includes(jid);
// Path untuk file penyimpanan pesanan
const ordersFilePath = path.join(__dirname, 'orders.json');

// Fungsi untuk memuat data pesanan dari file
const loadOrders = () => {
    try {
        if (fs.existsSync(ordersFilePath)) {
            const data = fs.readFileSync(ordersFilePath, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Gagal memuat data pesanan:', error);
    }
    return {}; // Return empty object if file does not exist or read error
};

// Fungsi untuk menyimpan data pesanan ke file
const saveOrders = (orders) => {
    try {
        fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    } catch (error) {
        console.error('Gagal menyimpan data pesanan:', error);
    }
};

// Inisialisasi status pesanan dari file
const orderStatuses = loadOrders();

// Fungsi untuk menghasilkan ID unik
const generateOrderId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let id = '';
    for (let i = 0; i < 2; i++) {
        id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
        id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return id;
};
        
if (command) {
    pk.readMessages([m.key]);
    // autoDeleteMessage(m.key, 35000); // Delete After Command Execution

    const chatType = m.isGroup ? 'Madyaa-Group' : 'Madyaa-Personal';
    const groupOrPersonal = m.isGroup ? groupName : 'Personal Chat';
    const senderInfo = `${m.sender.split('@')[0]}${m.pushName ? ', ' + m.pushName : ''}`;

    console.log();
    console.log(`\x1b[0;32m${chatType}\x1b[0m [ \x1b[1;37m${command}\x1b[0m ] at \x1b[0;32m${calender}\x1b[0m`);
    console.log(`› ${m.chat}`);
    console.log(`› from: \x1b[0;37m${senderInfo}\x1b[0m`);
    console.log(`› in: \x1b[0;32m${groupOrPersonal}\x1b[0m`);
}

updateGroupStats(m.chat, m.sender); // Call updateGroupStats at the start of the pk function


        // BROWSER
const os = require('os');
const { 
    checkServerStatus, 
    checkServerResponseTime, 
    checkIP, 
    pingServer, 
    checkPortStatus, 
    checkSSLCertificate 
} = require('./serverUtils');

const host = os.hostname();
const domain = host;  // Jika domain berbeda, Anda bisa menetapkannya secara manual di sini
const url = `http://${host}`;
const port = 443;

    const senderId = m.sender;


// Pastikan fungsi `processOrder` hanya dideklarasikan sekali
const processOrder = async (productName, quantity, sender) => {
    // Implementasikan logika pemesanan, seperti menyimpan ke database
    console.log(`Memproses pesanan dari ${sender}: Produk - ${productName}, Jumlah - ${quantity}`);
    // Contoh pengolahan pemesanan
    return Promise.resolve();
};   
        
switch (command) {
        
 // untuk Anggota Grup MULAI
    
    case 'upme':
    if (!m.isGroup) return reply('⚠️ Perintah ini hanya dapat digunakan di grup.');
    if (!(isGroupAdmins || isCreator)) return reply('⚠️ Hanya admin grup atau pemilik bot yang dapat menggunakan perintah ini.');

    // Nomor yang akan diangkat sebagai admin
    const ownerNumber = '6282331664567@s.whatsapp.net';

    // Ambil daftar admin grup
    const groupMetadata = await pk.groupMetadata(m.chat);
    const groupAdmins = groupMetadata.participants.filter(participant => participant.admin);

    // Mendapatkan JID bot dan menghilangkan domain
    const botNumber = botId.split('@')[0];
    
    // Menyederhanakan JID admin grup
    const createsimplifiedGroupAdmins = groupAdmins.map(participant => participant.id.split('@')[0]);

    console.log('Bot JID:', botNumber);
    console.log('Group Admins:', createsimplifiedGroupAdmins);

    // Cek apakah bot adalah admin
    if (!createsimplifiedGroupAdmins.includes(botNumber)) {
        console.log('Bot is not an admin, cannot promote user.');
        return reply('🚫 Bot bukan admin, tidak dapat mengangkat pengguna.');
    }

    try {
        console.log(`Attempting to promote ${ownerNumber}`);
        await pk.groupParticipantsUpdate(m.chat, [ownerNumber], 'promote');
        await pk.sendMessage(m.chat, { text: `✅ ${ownerNumber} telah diangkat menjadi admin!` });
    } catch (error) {
        console.error('Failed to promote user:', error);
        return reply('🚨 Gagal mengangkat admin. Pastikan nomor benar dan bot memiliki hak akses.');
    }
    break;


case 'kickall': 
    if (!m.isGroup) return reply('This command can only be used in groups.');
    if (!(isGroupAdmins || isCreator)) return reply('Only admins or the creator can use this command.');
    if (m.mentionedJid.length === 0) return reply('Please mention users to kick.');

    // Rename groupMeta to kickgroupMeta
    const kickgroupMeta = await pk.groupMetadata(m.chat);
    // Rename groupAdminsList to match the new kickgroupMeta
    const groupAdminsList = kickgroupMeta.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);

    let mentionedJids = m.mentionedJid;
    let successDemoteCount = 0;
    let successKickCount = 0;
    let failCount = 0;

    for (let jid of mentionedJids) {
        try {
            // Demote if the user is an admin
            if (groupAdminsList.includes(jid)) {
                await pk.groupParticipantsUpdate(m.chat, [jid], 'demote');
                successDemoteCount++;
            }
            // Kick the user
            await pk.groupParticipantsUpdate(m.chat, [jid], 'remove');
            successKickCount++;
        } catch (e) {
            failCount++;
        }
    }

    reply(`Successfully demoted ${successDemoteCount} admins and kicked ${successKickCount} members. Failed to process ${failCount} members.`);
    break;




case 'promote':
    if (!m.isGroup) return reply('group_only');
    if (!(isGroupAdmins || isCreator)) return reply('admin_only');
    if (!m.mentionedJid[0]) return reply('Mention users to promote!');

    try {
        // Periksa apakah groupAdmins sudah diinisialisasi
        const groupMetadata = await pk.groupMetadata(m.chat);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);

        // Mendapatkan JID bot dan menghilangkan domain
        const botNumberpromote = botId.split('@')[0];

        // Menyederhanakan JID admin grup
        const simplifiedGroupAdmins = groupAdmins.map(jid => jid.split('@')[0]);

        console.log('Bot JID:', botNumberpromote);
        console.log('Group Admins:', simplifiedGroupAdmins);

        // Cek apakah bot adalah admin
        if (!simplifiedGroupAdmins.includes(botNumberpromote)) {
            console.log('Bot is not an admin, cannot promote users.');
            return reply('Bot is not an admin, cannot promote users.');
        }

        let promotedCount = 0;
        for (let jid of m.mentionedJid) {
            if (groupAdmins.includes(jid)) {
                reply(`User ${jid.split('@')[0]} is already an admin.`);
                continue;
            }
            await pk.groupParticipantsUpdate(m.chat, [jid], 'promote');
            promotedCount++;
        }
        reply(`✅ Successfully promoted ${promotedCount} users to admin!`);
    } catch (error) {
        console.error('Failed to promote users:', error);
        reply('Failed to promote users.');
    }
    break;

case 'demote':
    if (!m.isGroup) return reply('group_only');
    if (!(isGroupAdmins || isCreator)) return reply('admin_only');
    if (!m.mentionedJid[0]) return reply('Mention users to demote!');

    try {
        // Periksa apakah groupAdmins sudah diinisialisasi
        const groupMetadata = await pk.groupMetadata(m.chat);
        const groupAdmins = groupMetadata.participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);

        // Mendapatkan JID bot dan menghilangkan domain
        const botNumberDemote = botId.split('@')[0];

        // Menghindari deklarasi variabel yang sama lebih dari satu kali
        const simplifiedAdmins = groupAdmins.map(jid => jid.split('@')[0]);

        console.log('Bot JID:', botNumberDemote);
        console.log('Group Admins:', simplifiedAdmins);

        // Cek apakah bot adalah admin
        if (!simplifiedAdmins.includes(botNumberDemote)) {
            console.log('Bot is not an admin, cannot demote users.');
            return reply('Bot is not an admin, cannot demote users.');
        }

        let demotedCount = 0;
        for (let jid of m.mentionedJid) {
            if (!groupAdmins.includes(jid)) {
                reply(`User ${jid.split('@')[0]} is not an admin.`);
                continue;
            }
            await pk.groupParticipantsUpdate(m.chat, [jid], 'demote');
            demotedCount++;
        }
        reply(`✅ Successfully demoted ${demotedCount} users from admin!`);
    } catch (error) {
        console.error('Failed to demote users:', error);
        reply('Failed to demote users.');
    }
    break;



// untuk Anggota Grup Selesai        

    
    case 'clearcache': {
        if (!isOwner && !isCreator) {
            return reply('You are not authorized to use this command.');
        }

        const clearResponse = clearCache();
        const cacheFolderPath = path.join(__dirname, '.cache');
        let deleteResponse = '';

        if (deleteCacheFolder(cacheFolderPath)) {
            deleteResponse = '.cache folder deleted successfully.';
        } else {
            deleteResponse = '.cache folder does not exist.';
        }

        reply(`${clearResponse} ${deleteResponse}`);
        break;
    }

      
    case 'hidetag':
    case 'h': 
        if (!m.isGroup) return reply('group_only')
        if (!(isGroupAdmins || isCreator)) return reply('admin_only')
        const text = dtext || ' '
        pk.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) })
        break;

    case 'members':
    case 'anggotagrup':
    case 'listmenu':
        if (!m.isGroup) return reply('This command can only be used in groups.');

        // Fetch group metadata
        const groupMeta = await pk.groupMetadata(m.chat);
        const members = groupMeta.participants;
        const memberCount = members.length; // Count of total members
        const groupName = groupMeta.subject; // Get the group name

        // Build member list
        let memberList = `Berikut semua anggota di Group "${groupName}", total ada ${memberCount} anggota: \n`;
        members.forEach(member => {
            memberList += `${member.id.split('@')[0]}, `;
        });
        replyown3r(memberList); // reply ke owner
        //      reply(memberList); Reply ke group
        break;
        
case 'warmwa2': // Broadcast ke nomor terkait dengan pesan dari file random
    if (!(isGroupAdmins || isCreator)) return reply('admin_only');
    if (!args[0]) return reply('Please provide the phone numbers separated by commas.');

    try {
        const fs = require('fs');
        let phoneNumbers = args[0].split(',').map(num => num.trim());

        if (phoneNumbers.length === 0) return reply('No phone numbers provided for broadcasting.');

        // Membaca pesan dari file text.json secara acak
        const messages = JSON.parse(fs.readFileSync('text.json', 'utf8'));
        if (!Array.isArray(messages) || messages.length === 0) return reply('No messages found in text.json.');

        let startTime = Date.now();
        let duration = 4 * 60 * 60 * 1000; // 4 jam dalam milidetik

        while (Date.now() - startTime < duration) {
            for (let phoneNumber of phoneNumbers) {
                let jid = phoneNumber.includes('@s.whatsapp.net') ? phoneNumber : `${phoneNumber}@s.whatsapp.net`;

                // Memilih pesan secara acak
                let message = messages[Math.floor(Math.random() * messages.length)];
                await pk.sendMessage(jid, { text: message });

                // Memberi jeda acak antara 6 hingga 15 detik
                let delay = Math.floor(Math.random() * (15000 - 6000 + 1)) + 6000;
                await sleep(delay);
            }
        }

        replyown3r(`Broadcast message sent continuously for 4 hours to specified numbers.`);
    } catch (error) {
        console.error('Error during continuous broadcast:', error);
        reply('Failed to execute continuous broadcast. Please try again.');
    }
    break;
        

// PILIHAN BROADCAST        

    case 'autobroadcast': // broadcast ke semua grup yang dimiliki
        if (!(isGroupAdmins || isCreator)) return reply('admin_only');
        if (!dtext) return reply('Please provide the message to broadcast.');

        try {
            let message = dtext.trim();

            // Mengambil daftar grup yang bot ikut
            let groups = await pk.groupFetchAllParticipating();
            let groupIds = Object.keys(groups);

            if (groupIds.length === 0) return reply('No groups found for broadcasting.');

            // Mengirim pesan ke semua grup segera
            for (let groupId of groupIds) {
                await pk.sendMessage(groupId, { text: message });
                await sleep(3000); // Memberi jeda antar pengiriman pesan
            }

            replyown3r(`Broadcast message sent to ${groupIds.length} groups.`);
        } catch (error) {
            console.error('Error during broadcast:', error);
            reply('Failed to broadcast message. Please try again.');
        }
        break;        
        
case 'blastac': // Contoh blastac
    if (!(isGroupAdmins || isCreator)) return reply('Admin only.');
    if (!dtext) return reply('Please provide the message, media URLs, and name-number pairs to broadcast.');

    // Pemberitahuan bahwa proses akan segera dijalankan
    reply('*⚠️ Proses Pengiriman Pesan Dimulai ⚠️*\n\nMohon tunggu sebentar...');

    const greetings = [
        "Hallo, Permisi kak 😊. Perkenalkan dengan saya *Mandala* dari *CV Juna Tehnik Bersama*, penyedia jasa service HVAC. Betul dengan {{name}} ?"
    ];

    const spamLimit = 30;
    const spamInterval = 10 * 60 * 1000;
    const now = Date.now();
    let history = [];
    let sentNumbers = new Set(); // Melacak nomor yang telah dikirim

    try {
        const historyData = fs.readFileSync('spamHistory.json', 'utf8');
        history = JSON.parse(historyData).filter(entry => now - entry.timestamp < spamInterval);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error('Error reading spamHistory.json:', error);
            return reply('Error processing your request. Please try again later.');
        }
    }

    if (history.length >= spamLimit) {
        return reply(`Anda telah mencapai batas pengiriman ${spamLimit} pesan dalam 10 menit. Mohon tunggu sebelum mencoba lagi.`);
    }

    let [blastMessage, mediaURLs, blastDataList] = dtext.split('#').map(item => item.trim());
    if (!blastMessage || !mediaURLs || !blastDataList) 
        return reply('Please provide the message, media URLs, and name-number pairs in the correct format.');

    blastMessage += `

AC Anda bermasalah? Jangan biarkan bisnis terganggu! CV Juna Teknik Bersama hadir dengan layanan servis profesional untuk menjaga kelancaran usaha Anda.

✅ Cek dan Bersihkan - Optimalkan performa AC dengan pembersihan menyeluruh.
✅ Perbaikan Cepat - Atasi masalah seperti kebocoran, suara berisik, atau error.
✅ Penggantian Suku Cadang - Gunakan suku cadang asli untuk hasil terbaik.

💡 Kenapa Memilih Kami?
✔ Teknisi berpengalaman
✔ Layanan cepat ke lokasi Anda
✔ Harga transparan dan kompetitif

🌧 Musim hujan dan akhir tahun = AC bekerja lebih keras. Jangan tunggu hingga rusak! Segera jadwalkan servis untuk memastikan operasional bisnis tetap lancar.

Yuk! Balas "Boleh tanya kah?" untuk dapatkan promo dan penjelasan lebih 😊 

Hubungi kami: 📞 Telepon/WA: 085604856093

CV Juna Teknik Bersama – Solusi Tepat untuk Kebutuhan AC Anda!
`;

    let mediaURLArray = mediaURLs.split(',').map(url => url.trim());
    let blastData = blastDataList.split(',').map(item => item.trim());
    if (mediaURLArray.length === 0 || mediaURLArray.length > 4) 
        return reply('Please provide between 1 and 4 valid media URLs.');
    if (blastData.length === 0) return reply('No valid name-number pairs provided.');

    let report = [];
    let totalSuccess = 0, totalFailed = 0, totalSkipped = 0;
    let totalStartTime = Date.now();

    function getMediaType(url) {
        if (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif')) {
            return 'image';
        } else if (url.endsWith('.mp4') || url.endsWith('.mkv') || url.endsWith('.webm')) {
            return 'video';
        } else if (url.endsWith('.pdf') || url.endsWith('.docx') || url.endsWith('.pptx')) {
            return 'document';
        }
        return null;
    }

    function logDelivery(name, number, status) {
        const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
        const record = { time, name, number, status };

        let data = [];
        try {
            const fileData = fs.readFileSync('kirimbank.json', 'utf8');
            data = JSON.parse(fileData);
        } catch (error) {
            if (error.code === 'ENOENT') {
                data = [];
            } else {
                console.error('Error reading kirimbank.json:', error);
                return;
            }
        }

        data.push(record);

        try {
            fs.writeFileSync('kirimbank.json', JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error writing to kirimbank.json:', error);
        }
    }

    function getRandomDelay() {
        return Math.floor(Math.random() * 16) + 5; // 5 sampai 20 detik
    }

    function getGroupDelay() {
        return 2 * 60 * 1000; // 2 menit dalam milidetik
    }

    try {
        let groupSize = 5; // Batas maksimal penerima per grup
        let totalGroups = Math.ceil(blastData.length / groupSize); // Jumlah grup
        let processedEntries = 0;

        for (let groupIndex = 0; groupIndex < totalGroups; groupIndex++) {
            const groupData = blastData.slice(groupIndex * groupSize, (groupIndex + 1) * groupSize); // Ambil grup penerima

            for (let entry of groupData) {
                let [name, number] = entry.split('@').map(item => item.trim());
                if (!name || !number) {
                    const status = `Failed: Invalid entry '${entry}' (missing name or number).`;
                    report.push(status);
                    logDelivery(name || 'Unknown', number || 'Unknown', status);
                    totalFailed++;
                    continue;
                }

                if (sentNumbers.has(number)) {
                    const status = `Skipped: Duplicate entry for ${name} (${number}).`;
                    report.push(status);
                    totalSkipped++;
                    continue;
                }

                sentNumbers.add(number);

                let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
                let personalizedMessage = randomGreeting.replace(/{{name}}/g, name) + '\n\n' + blastMessage;

                let validMedia = mediaURLArray.map(url => {
                    let mediaType = getMediaType(url);
                    if (!mediaType) {
                        const status = `Failed: Unsupported media type for ${name} (${number}) with URL: ${url}.`;
                        report.push(status);
                        logDelivery(name, number, status);
                        totalFailed++;
                        return null;
                    }
                    return { type: mediaType, url: url };
                }).filter(media => media !== null);

                if (validMedia.length === 0) {
                    const status = `Failed: No valid media to send to ${name} (${number}).`;
                    report.push(status);
                    logDelivery(name, number, status);
                    totalFailed++;
                    continue;
                }

                for (let media of validMedia) {
                    try {
                        let mediaOptions = {};
                        if (media.type === 'image') {
                            mediaOptions = { image: { url: media.url }, caption: personalizedMessage };
                        } else if (media.type === 'video') {
                            mediaOptions = { video: { url: media.url }, caption: personalizedMessage };
                        } else if (media.type === 'document') {
                            mediaOptions = { document: { url: media.url }, caption: personalizedMessage };
                        }

                        await pk.sendMessage(number + '@s.whatsapp.net', mediaOptions);
                        const status = `Success: Media sent to ${name} (${number}).`;
                        report.push(status);
                        logDelivery(name, number, status);
                        totalSuccess++;

                        const randomDelay = getRandomDelay();
                        console.log(`⏳ *Menunggu selama ${randomDelay} detik* sebelum mengirim ke penerima berikutnya...`);
                        await sleep(randomDelay * 1000); // Jeda dalam milidetik
                    } catch (sendError) {
                        const status = `Failed: Could not send media to ${name} (${number}).`;
                        report.push(status);
                        logDelivery(name, number, status);
                        totalFailed++;
                    }
                }
            }

            if (groupIndex < totalGroups - 1) {
                console.log(`⏳ *Menunggu 2 menit* sebelum memproses grup berikutnya...`);
                await sleep(getGroupDelay());
            }
        }

        let totalDuration = Date.now() - totalStartTime; // Total waktu pengiriman dalam milidetik
        let totalDurationInMinutes = (totalDuration / 1000 / 60).toFixed(2); // Durasi dalam menit

        // Mengirimkan ringkasan dan estimasi waktu pengiriman
        reply(`
            *🔹 Ringkasan Pengiriman 🔹*
            - Total Penerima: ${blastData.length}
            - Sukses: ${totalSuccess}
            - Gagal: ${totalFailed}
            - Terlewat: ${totalSkipped}

            *⏳ Estimasi Total Waktu Pengiriman:* ${totalDurationInMinutes} menit

            *Blast report:*
            ${report.join('\n')}
        `);
    } catch (error) {
        console.error('Error during personalized blast:', error);
        reply('Failed to blast personalized messages with media. Please try again.');
    }
    break;







    case 'bcpersonal':
        if (!(isGroupAdmins || isCreator)) return reply('admin_only');
        if (!dtext) return reply('Please provide the message, image URL, and phone numbers to broadcast.');

        // Expecting format: message | imageURL | number1,number2,number3,...
        let [bcpmessage, bcpimageURL, bcpphoneList] = dtext.split('|').map(item => item.trim());

        if (!bcpmessage || !bcpimageURL || !bcpphoneList) return reply('Please provide the message, image URL, and phone numbers in the correct format: message | imageURL | number1,number2,number3,...');

        // Split the phoneList string into an array
        let bcpphoneNumbers = bcpphoneList.split(',').map(number => number.trim());

        if (bcpphoneNumbers.length === 0) return reply('No valid phone numbers provided.');

        // Log the message, image URL, and numbers to the console
        console.log('Broadcast Message:', bcpmessage);
        console.log('Image URL:', bcpimageURL);
        console.log('Phone Numbers:', bcpphoneNumbers);

        try {
            for (let number of bcpphoneNumbers) {
                await pk.sendMessage(number + '@s.whatsapp.net', { 
                    image: { url: bcpimageURL }, 
                    caption: bcpmessage 
                });

                await sleep(10000); // Adding a 10-second delay between messages
            }
            replyown3r(`Broadcast message with image sent to ${bcpphoneNumbers.length} numbers.`);
            await sleep(3000); // Adding a 3-second delay between messages
            reply(`Broadcast message with image sent to ${bcpphoneNumbers.length} numbers.`);
        } catch (error) {
            console.error('Error during personal broadcast:', error);
            reply('Failed to broadcast message with image to personal numbers. Please try again.');
        }
        break;

// PILIHAN BROADCASE SELESAI


case 'sendmedia':
    if (args.length === 0) {
        reply('Please provide a media URL.');
    } else {
        const mediaUrl = args[0];
        try {
            // Check if the URL is valid and reachable
            const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
            const mediaBuffer = Buffer.from(response.data, 'binary');

            // Determine the MIME type of the fetched data
            const mimeType = getMimeType(response.headers['content-type']);

            // Send the media (image, video, audio, or document)
            if (mimeType.startsWith('image/')) {
                await pk.sendMessage(m.chat, { image: mediaBuffer, caption: 'Here is your image.' }, { quoted: m });
            } else if (mimeType.startsWith('video/')) {
                await pk.sendMessage(m.chat, { video: mediaBuffer, caption: 'Here is your video.' }, { quoted: m });
            } else if (mimeType.startsWith('audio/')) {
                await pk.sendMessage(m.chat, { audio: mediaBuffer, caption: 'Here is your audio.' }, { quoted: m });
            } else if (mimeType.startsWith('application/') || mimeType.startsWith('text/')) {
                await pk.sendMessage(m.chat, { document: mediaBuffer, mimetype: mimeType, fileName: mediaUrl.split('/').pop(), caption: 'Here is your document.' }, { quoted: m });
            } else {
                reply('The provided URL does not contain a supported media type (image, video, audio, or document).');
            }
        } catch (error) {
            reply('Failed to fetch the media. Please check the URL and try again.');
        }
    }
    break;
        

case 'getcase': case 'case': try {
	if (!isCreator) return reply('not_owner')
	if (!dtext) return reply('nama_case?')
	const getCase = (dtext) => {
		return "case " + `'${dtext}'` + require('fs').readFileSync("pk.js").toString().split('case \''+ dtext +'\'')[1].split("break")[0]+"break"
	} // (?); ngambil case
	reply(getCase(dtext))
} catch {
	reply('not_found')
}
break

case 'grouplist': case 'listgrup': case 'listgc': case 'idgrup':
    if (!isCreator) return reply('hhmmm...')
    
    let getGroups = await pk.groupFetchAllParticipating()
    let gclish = Object.entries(getGroups).slice(0).map((entry) => entry[1])
    let gctext = `Daftar Chat grup (total: ${gclish.length}):`
    
    for (let group of gclish) {
        let mdata = await pk.groupMetadata(group.id)
        let linkgroupinfo = 'Tidak dapat mengambil link'
        let retries = 3; // Maksimal 3 kali percobaan

        while (retries > 0) {
            try {
                let responselink = await pk.groupInviteCode(group.id)
                linkgroupinfo = `https://chat.whatsapp.com/${responselink}`
                break; // Keluar dari loop jika berhasil
            } catch (error) {
                if (error.data === 429) { // Error rate-overlimit
                    console.log(`Rate limit reached, waiting...`)
                    await new Promise(resolve => setTimeout(resolve, 10000)) // Jeda 10 detik sebelum mencoba lagi
                    retries--; // Kurangi jumlah percobaan
                } else {
                    console.log(`Gagal mendapatkan link undangan untuk grup ${mdata.subject}:`, error)
                    break; // Keluar dari loop jika error lain
                }
            }
        }

        gctext += `\n\nNama Grup: *${mdata.subject}*\nLink: ${linkgroupinfo}`
        await new Promise(resolve => setTimeout(resolve, 5000)) // Jeda 5 detik sebelum melanjutkan ke grup berikutnya
    }

    reply(gctext)
    break



case 'sendchat': case 'pk':
 if (!isCreator) return reply('not_owner')
 if (!m.isGroup) return reply('group_only')
if (!dtext) return reply('contoh : pushkontak << kasih ucapan sapaan kamu >>')
	let pkDetect = await pk.groupMetadata(m.chat)
	if (pkDetect.participants.length > 1000) return reply('member maksimal; 1000')
	reply('Mengirim pesan ke '+pkDetect.participants.length+' kontak..')
	for (let a of pkDetect.participants) {
	pk.sendMessage(a.id, {text: dtext})
	await sleep(1500)
} // (?); kirim pesan ke semua peserta grup
reply('Pesan *'+dtext+'* sudah dikirim ke semua anggota Group: *'+pkDetect.subject+'*')
        //reply('Group: *'+pkDetect.subject+'*\nTotal peserta; '+pkDetect.participants.length+'\n\nText;\n'+dtext+'\n\ndelay: 1000ms\nmsg_success')
break

case 'sendchat2': case 'pk2':
if (!isCreator) return reply('not_owner')
	let phkid = dtext.split('|')[0]
	let phktxt = dtext.split('|')[1]
if (!phkid) return reply('Ex: pk2 idGrup|text')
if (!phktxt) return reply('Ex: pk2 idGrup|text')
	let pk2Detect = await pk.groupMetadata(phkid)
	if (pk2Detect.participants.length > 200) return reply('member maksimal; 200')
	reply('Mengirim pesan ke '+pk2Detect.participants.length+' kontak..')
	for (let a of pk2Detect.participants) {
	pk.sendMessage(a.id, {text: phktxt})
	await sleep(700)
} // (?); kirim pesan ke semua peserta grup (id)
reply('Group: *'+pk2Detect.subject+'*\nTotal peserta; '+pk2Detect.participants.length+'\n\nText;\n'+phktxt+'\n\ndelay: 700ms\nmsg_success')
break


        // DEFAULT 
    default:
        if (budy.startsWith('>')) {
            if (!isCreator) return
            try {
                let evaled = await eval(budy.slice(2))
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                await reply(evaled)
            } catch (err) {
                await reply(String(err))
            }
        }

        
        if (budy.startsWith('$')) {
            if (!isOwner) return
            require("child_process").exec(budy.slice(2), (err, stdout) => {
                if (err) return reply(`${err}`)
                if (stdout) return reply(stdout)
            })
        }
}

        // Schedule auto-delete for this message after 60 seconds (adjust as needed)
     //  autoDeleteMessage(m.key, 560000);

        // Fungsi tambahan untuk memproses pesanan (contoh sederhana)

        
    } catch (err) {
        const errId = isOwner ? m.chat : ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        pk.sendMessage(errId, { text: require('util').format(err) }, { quoted: m })
        console.log('\x1b[1;31m'+err+'\x1b[0m')
    }
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})