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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_01_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJab3ArdXkzd0Y2QXlYY1QyMDk5R0V2UmlTMXdzQy9OeHFaYXQ5L0VnK05NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKcVBWYlNERVNpV3I0STFJdXcwUTJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2MDIwZDQwLTdiODAtNDQwMS04ZjVkLWE0OTE2ZGJiMDUyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMDMsXG4gICAgICAyMTMsXG4gICAgICAyMTgsXG4gICAgICAyMDYsXG4gICAgICAxMDgsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICAyNTMsXG4gICAgICAyMDQsXG4gICAgICA4OSxcbiAgICAgIDE4MyxcbiAgICAgIDE0OCxcbiAgICAgIDE4MixcbiAgICAgIDM2LFxuICAgICAgMTU3LFxuICAgICAgMjQsXG4gICAgICA5NCxcbiAgICAgIDE2LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTIzLFxuICAgICAgMjM5LFxuICAgICAgNDIsXG4gICAgICAyMjMsXG4gICAgICA2MixcbiAgICAgIDE2MyxcbiAgICAgIDIwMCxcbiAgICAgIDksXG4gICAgICAxMCxcbiAgICAgIDIyNCxcbiAgICAgIDI1NCxcbiAgICAgIDE1MSxcbiAgICAgIDYsXG4gICAgICA5NCxcbiAgICAgIDE3MSxcbiAgICAgIDE2NixcbiAgICAgIDExMCxcbiAgICAgIDQyLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjM3MlRDRVg5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4MzgzMzk2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDg3MjIxMDEwMTQ3MTg6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qk/CdkKvwnZCyIPCdkKbwnZCe8J+rtPCfj7zwn5Sq8J+YiCDwnZCg8J2Qq/CdkJ7wnZCyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJQMWtRUWdZKzR0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyMWN4Nk1NK3pRcUNyNVVFR3VHelQ0bzZnQ0pVWWpvcnFQZWZEb0c0RERjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNKYmJlWC9NT0p0OTRzWWlad3BnaGU2Rzhhd3NMRWRDN2dJWTJIekdtcnVUZ1dXRG04K0p2dWRjLzNoSUdQRlFobERXbGlLb2RYM2FFRmxFSXY5VGlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImYyM29kc0pjNHBtRlZlUExVOUwvSGY4bXB0ZXM1RXpIU3dqMGpoczJiSTY0eWtMVnp2Tld4YWhiOU12aUVpcmp4OXNJdE9ZSFNqeXc1WGV2TU5vSmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjgzODMzOTY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1ODQwNjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNWGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1YZC5qc29uIjogIntcImtleURhdGFcIjpcIlpydDZDMzNsS2VoYThjRWdXUFhGSTFJQUorWkNuTWhzeFk3NTd5YWR6b0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0MDI1NTMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1ODQwNzA2NTBcIn0iCn0="


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
