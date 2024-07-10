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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_35_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1IS05zSTlKR0NqUFU2M1pIVGJSbVBVN01VV0hsbjZSSy9OdVBsSXVhTVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm40QVNYMHdhU0IyeWxfbHNMRW5ESVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjBmNWM5ZmYtYjBkZC00ZjgwLTg0MTYtMmJiZDQ5NWIwZmNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMjQsXG4gICAgICAxNTksXG4gICAgICAxOTIsXG4gICAgICAxMDcsXG4gICAgICAzLFxuICAgICAgODUsXG4gICAgICAxNDksXG4gICAgICAyMCxcbiAgICAgIDI1NCxcbiAgICAgIDY2LFxuICAgICAgMjEsXG4gICAgICAzMCxcbiAgICAgIDE3NSxcbiAgICAgIDE0MyxcbiAgICAgIDEwMixcbiAgICAgIDE4OCxcbiAgICAgIDQ0LFxuICAgICAgMTIyLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTU5LFxuICAgICAgMTQzLFxuICAgICAgMTk3LFxuICAgICAgMTY3LFxuICAgICAgNTUsXG4gICAgICAxNTYsXG4gICAgICAxNzcsXG4gICAgICA4LFxuICAgICAgMjExLFxuICAgICAgNzksXG4gICAgICAxOTQsXG4gICAgICAxODAsXG4gICAgICAxMDUsXG4gICAgICAxNixcbiAgICAgIDE0OSxcbiAgICAgIDE3OSxcbiAgICAgIDU0LFxuICAgICAgOTIsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJITlhXRTdQV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2ODM4MzM5NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4NzIyMTAxMDE0NzE4OjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkJPwnZCr8J2QsiDwnZCm8J2QnvCfq7Twn4+88J+UqvCfmIgg8J2QoPCdkKvwnZCe8J2QslwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6WndzVUNFSXFEdUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjFjeDZNTSt6UXFDcjVVRUd1R3pUNG82Z0NKVVlqb3JxUGVmRG9HNEREYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnanNJdDJ4cjJCOTZVWE91RjgxOEZGU0pjOFNrVlZ4djRyU1kxcmY3T1QzakVZbmdLaXh4SGV2dHRuZ0JOdWhoNS80Nms5bFVlZjdnK0x5bm8rRkFndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoZGdQUENDajE3eXlvTVl3YUVmUmFKZVdOZ1hiby80ZUxKMUF0c2UrTkRQb3k4bXM4RWVVWkVOS2hNS2JRUlZNeEJRTWF4NWZJeHQ3UFJ0M3VJWDVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MzgzMzk2OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTgyNTQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlNFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCU0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVeFdLNGVpc3JSVnROQ2F1MDV2a2dZNHZXNm5Yd1dJbHd0WkdpTWRhSTJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY4MjY2NzE5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTgyNTQ0NDU4XCJ9Igp9"  // PUT your SESSION_ID 


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
