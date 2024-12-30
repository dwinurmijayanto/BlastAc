require('./config')
const { 
	default: 
		pkConnect, 
		useMultiFileAuthState, 
		DisconnectReason, 
		fetchLatestBaileysVersion, 
		generateForwardMessageContent, 
		prepareWAMessageMedia, 
		generateWAMessageFromContent, 
		generateMessageID, 
		downloadContentFromMessage, 
		makeInMemoryStore, 
		jidDecode, 
		proto, 
		getAggregateVotesInPollMessage,
        sendPresenceUpdate // Menambahkan import sendPresenceUpdate
	} = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const {
    smsg,
    sleep,
    runtime,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getGroupAdmins
} = require('./function')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

// Fungsi untuk mengirim status mengetik
const sendTypingStatus = async (pk, jid) => {
    const randomDelay = Math.floor(Math.random() * 2000) + 500; // Generate random delay between 1s (1000ms) and 3s (3000ms)
    await pk.sendPresenceUpdate('composing', jid); // Menampilkan status mengetik
    await new Promise(resolve => setTimeout(resolve, randomDelay)); // Simulasi mengetik selama waktu acak
    await pk.sendPresenceUpdate('paused', jid); // Menghentikan status mengetik
};


async function startpk() {
    const { state, saveCreds } = await useMultiFileAuthState('./sesipk')
    const pk = pkConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
		browser: ["🅼🅰🅳🆈🅰🅰 🅿🅺", "Guardian browser", "1.0.1"],
        defaultQueryTimeoutMs: undefined,
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "hi im bot"
            }
        }
    })

    store.bind(pk.ev)
    
    pk.ev.on('call', async (caller) => {
	    console.log(caller)
    })

    pk.ev.on('messages.upsert', async chatUpdate => {
        try {
            msg = chatUpdate.messages[0]
            if (!msg.message) return
            msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
            if (!pk.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
            if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
            
            m = smsg(pk, msg, store)
            
            // Mengirim status mengetik sebelum memproses pesan
            await sendTypingStatus(pk, msg.key.remoteJid);

            require("./pk")(pk, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    pk.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
    })
	
    // Setting
    pk.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    pk.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = pk.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    pk.getName = (jid, withoutContact  = false) => {
        id = pk.decodeJid(jid)
        withoutContact = pk.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = pk.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === pk.decodeJid(pk.user.id) ?
            pk.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    pk.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await pk.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await pk.getName(i)}\nFN:${await pk.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	    })
	}
	pk.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    pk.public = true
    pk.serializeM = (m) => smsg(pk, m, store)

 pk.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update;

  if (connection === 'close') {
    const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
    console.log(
      'Connection closed due to:',
      lastDisconnect?.error,
      ', Reconnecting:',
      shouldReconnect
    );

    if (shouldReconnect) {
      startSock();
    }
  } else if (connection === 'open') {
    console.log('Connection opened successfully');
  }
});



    
    pk.ev.on('creds.update', saveCreds)

    pk.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await pk.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    pk.cMod = (jid, copy, text = '', sender = pk.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === pk.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }
    /**
     * 
     * @param {*} path 
     * @returns 
     */
    pk.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return pk
}

startpk()


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})