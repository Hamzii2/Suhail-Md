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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_30_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZFbDA2VENlTWlyb1o0bHF3L0FWQlE0SnV0RktXc0MxR2NnUUM2U3VDRHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFzOGpMTlA5UldTTG1MclpUTUVXc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI1MTI4YmItMWQ3Ni00N2QwLWI3ZTAtNjRmMTM0MWFhMTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDI0OSxcbiAgICAgIDQwLFxuICAgICAgNDEsXG4gICAgICAyMjgsXG4gICAgICA5OSxcbiAgICAgIDY2LFxuICAgICAgNzMsXG4gICAgICAxNDcsXG4gICAgICAyMzcsXG4gICAgICA1OSxcbiAgICAgIDg4LFxuICAgICAgMjQ2LFxuICAgICAgMjgsXG4gICAgICAxMTQsXG4gICAgICA1MCxcbiAgICAgIDM1LFxuICAgICAgNCxcbiAgICAgIDEwNixcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMTA0LFxuICAgICAgMjAwLFxuICAgICAgMTIxLFxuICAgICAgMjI0LFxuICAgICAgODAsXG4gICAgICAzMixcbiAgICAgIDQ5LFxuICAgICAgMzksXG4gICAgICAxMCxcbiAgICAgIDIxOCxcbiAgICAgIDEzNCxcbiAgICAgIDIyMCxcbiAgICAgIDU3LFxuICAgICAgNDMsXG4gICAgICAxNjYsXG4gICAgICA5NSxcbiAgICAgIDIzMixcbiAgICAgIDE3NixcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMd3JlY0tFTEhVekxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieEQ0aDRac0c2cnoyOGZDcjJIVzJLWUJUYURhYTIrTm1jMGJpU2JvR2luZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1RFlZM2d0QVVYUWJBNE9mcSttZzRYdlRoOFlOWm9ORm1iMDNVS3ZtUGM0NTZtNkpHZE5ZdEVCOUJ1cVdyaXl3NHlCRG42OWhjOGNCVkVKQVJ3NEZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLQitBNkQzeVViSEZOUHgvcHhnd2N6Y2ZJNkdoUjVzMEdlM01rSWcvMFFXZ05aeDNpNFJLUW0wNXpTZ1hBZXd6WWp1NzI2amlMUWthSGYxbWdsaDJqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjgzODMzOTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODcyMjEwMTAxNDcxODoxNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjgzODMzOTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MjA2MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDTFlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNMWS5qc29uIjogIntcImtleURhdGFcIjpcImU3SFc1ZldINmIvL011RDZSZUpsYjFib1UwdmZwS2hBbTN6QXYrVEF4MHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkwMTExMjk0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwOTIwNjMzMzkzXCJ9Igp9"

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
