const fs = require('fs');
const path = require('path');
const statsPath = path.join(__dirname, 'groupStats.json');

// Load or initialize group stats
let groupStats = {};
if (fs.existsSync(statsPath)) {
    groupStats = JSON.parse(fs.readFileSync(statsPath));
}

// Save group stats
const saveGroupStats = () => {
    fs.writeFileSync(statsPath, JSON.stringify(groupStats, null, 2));
};

// Function to update group statistics
const updateGroupStats = (chatId, senderId) => {
    if (!groupStats[chatId]) {
        groupStats[chatId] = {
            totalMessages: 0,
            userMessages: {},
        };
    }

    // Increment total message count
    groupStats[chatId].totalMessages++;

    // Increment user message count
    if (!groupStats[chatId].userMessages[senderId]) {
        groupStats[chatId].userMessages[senderId] = 0;
    }
    groupStats[chatId].userMessages[senderId]++;

    // Save stats after updating
    saveGroupStats();
};

// Function to get group statistics
const getGroupStats = (chatId) => {
    return groupStats[chatId] || { totalMessages: 0, userMessages: {} };
};

// Function to reset group statistics
const resetGroupStats = (chatId) => {
    if (groupStats[chatId]) {
        delete groupStats[chatId]; // Hapus statistik grup
        saveGroupStats(); // Simpan perubahan ke file
        return true; // Mengembalikan true jika berhasil
    }
    return false; // Mengembalikan false jika grup tidak ditemukan
};

module.exports = {
    updateGroupStats,
    getGroupStats,
    resetGroupStats, // Tambahkan ke ekspor
};