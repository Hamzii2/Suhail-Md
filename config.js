const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "393512138722";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068383396";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_22_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJHem9ZR3BZck02TG5VeFdDTExySnQyUVlyWTJCUHdVenpZY01WbmtQN0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtHbFhjQnd6VElTRzRnNTVaNm9Da3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzgyMjNiOTktNzU5NS00YjExLTgxNDMtZjQ2OTlhM2FlMDBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTcxLFxuICAgICAgOTAsXG4gICAgICAxMTEsXG4gICAgICAyMDAsXG4gICAgICAyMzAsXG4gICAgICAxMDIsXG4gICAgICAyMDEsXG4gICAgICAxNjAsXG4gICAgICAxNjksXG4gICAgICAxMjQsXG4gICAgICA2MSxcbiAgICAgIDE4NCxcbiAgICAgIDI1MSxcbiAgICAgIDYzLFxuICAgICAgODksXG4gICAgICA1NyxcbiAgICAgIDIyNyxcbiAgICAgIDk2LFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDk1LFxuICAgICAgMTEzLFxuICAgICAgMTQyLFxuICAgICAgMTEzLFxuICAgICAgMjI3LFxuICAgICAgMTU3LFxuICAgICAgMjMsXG4gICAgICAxODEsXG4gICAgICAzMSxcbiAgICAgIDExNCxcbiAgICAgIDE2NixcbiAgICAgIDU5LFxuICAgICAgMTc1LFxuICAgICAgMTY2LFxuICAgICAgMTI1LFxuICAgICAgMjAyLFxuICAgICAgMjA0LFxuICAgICAgMzIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0VLTTJTNVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjgzODMzOTY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODcyMjEwMTAxNDcxODoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV0MrUE1GRU92UjFMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9wMFRlZ1laZWJid1BUb2VKbHg2a3NrUk1aVkJQMVhtZ29pSFErTVFQRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUdaa0g5aDljMkVjUnFTUE1JN1d1OWVCbmJTaTh3RnR0Q0srTzdQT3djeTVhQklSNkJNZzR4M1ZJNy9MNFdrRVdDeURDVXNVcXdxRFdqdkhUaGhDalE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUzJ0QytMVTEvWC8vTVJoNjZ4Z09sVUhFNWo4RFV4WUxXcjRnYXZMNENyTVhRaEltaGtyanJwOHkwbXBibEZIRlpBWW52L1hqQlRpRm9zT2dDaDg5aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2ODM4MzM5NjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTQ4NTI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTNjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNM2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlaVI4a2EzbHRuaG9PTVJsdGttVC9aU29xS01BS05jeVhVYzRmREVpV3VJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODUzMTYxOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzE0ODUzMTIyM1wifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
