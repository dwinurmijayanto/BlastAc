// utils.js
const getMimeType = (contentType) => {
    return contentType.split(';')[0]; // Extract the MIME type without any additional parameters
};

module.exports = { getMimeType };
