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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349167448739‪‬";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_39_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUlE1MWJCazBDTEIvWHVmcUUrVTBTTnV1UkdVSnI3S1BxbFdtYnkzM2pKdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLS03U05kN3dUOC00YVVrWEY1bjV3d1wiLFxuICBcInBob25lSWRcIjogXCJhY2NkNzU2NS00ZTg2LTQ4NDItYTNlMC02YjJlYzQ4ZWRiZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAzLFxuICAgICAgMjIxLFxuICAgICAgMTYsXG4gICAgICAyMjEsXG4gICAgICA2OSxcbiAgICAgIDU5LFxuICAgICAgMTQ5LFxuICAgICAgMTE2LFxuICAgICAgOTMsXG4gICAgICAxMixcbiAgICAgIDIwLFxuICAgICAgMTc5LFxuICAgICAgMTYxLFxuICAgICAgMzgsXG4gICAgICAxNDQsXG4gICAgICA3NixcbiAgICAgIDE1MyxcbiAgICAgIDMyLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDE2LFxuICAgICAgMCxcbiAgICAgIDk4LFxuICAgICAgMjMyLFxuICAgICAgMjExLFxuICAgICAgMjAwLFxuICAgICAgMTQxLFxuICAgICAgMjIzLFxuICAgICAgMTk0LFxuICAgICAgNjYsXG4gICAgICAxNzEsXG4gICAgICA4OSxcbiAgICAgIDg5LFxuICAgICAgMjM0LFxuICAgICAgMSxcbiAgICAgIDM1LFxuICAgICAgMjYsXG4gICAgICAzMixcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056a3A5c0tFT2ZCcXJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFBnRnA5YVpjeXlVUENYc2xkVmJTNFJYcnRjMmhkNXpPUzVEaTlUanFGMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0SFlRV2Fvem4yRHNrVUVFZzJyL2JNckthLzAyWElrS2xWdHZKSUFOSDNsYmFDMlgydDJkU3pnUnFMa3VRM01wazZCc01ERzYwd2dZZVpJQXFYVitndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2RTRVOS9zTGgvcTlFYlQyQzdOTXZreHZydDJ6d3ZTMHA5T0NxQjU2Z0E2RmVhOTlUQWxlYWNVVENXc2YyVWRPalc1YWxteVJwVk11Z1hqZUVpTnJBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjc0NDg3Mzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJhYnkgQm95XCIsXG4gICAgXCJsaWRcIjogXCIxOTY4MzAxOTc0ODE1NDk6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjc0NDg3Mzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDU4MzQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2kwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5MWZ3OURYVjQ4NDBTbGlqRmxVNmFEQVkxditnS3hWUy9YSy9MWWJ1b1NNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NzU4NDcyNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQ1NzkzMDE1MlwifSIKfQ=="
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
