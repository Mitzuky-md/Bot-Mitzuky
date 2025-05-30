





const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*╭──────────●●►*
*`ᴍɪᴛᴢᴜᴋʏ ᴍᴅ ᴜᴘᴛɪᴍᴇ ʟɪꜱᴛ`*

*_ᴜᴘᴛɪᴍᴇ:➠_*  ${runtime(process.uptime())}

*_ʀᴀᴍ ᴜꜱᴀɢᴇ:➠_* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ

*_ʜᴏꜱᴛɴᴀᴍᴇ:➠_* ${os.hostname()}

*_ᴏᴡɴᴇʀ:➠_* *ᴠɪʙʜᴜ ᴘᴀᴛʜᴜᴍ*
*╰──────────●●►*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
