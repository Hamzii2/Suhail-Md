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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "‪2348166136475‬";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjMxVmRocEFOYkNkRWxIbXFFSTlhYlJUeW9IbCtsM0g1ZEFZak9sZXlsVEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NjEzNjQ3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ExMkJDMTZBN0YxMUE3NTM3RkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDQxMTQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2NjEzNjQ3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBRUVGRjA3MDI4Rjg2Qzg5MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDQxMTQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkppajlDakhDUjNlNGdybmNKWXo5NVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTA3NjNiZjMtZjc4Yy00MzM0LWE3ZmEtNjg4MTYyYjg2YzE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDEwNixcbiAgICAgIDIzNCxcbiAgICAgIDE3NCxcbiAgICAgIDk4LFxuICAgICAgMjAyLFxuICAgICAgMTg1LFxuICAgICAgNDQsXG4gICAgICAxMTUsXG4gICAgICAxMzEsXG4gICAgICAyMjQsXG4gICAgICAxMyxcbiAgICAgIDEyNixcbiAgICAgIDE2NixcbiAgICAgIDE4OSxcbiAgICAgIDkwLFxuICAgICAgNixcbiAgICAgIDczLFxuICAgICAgNzUsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTEzLFxuICAgICAgMTMwLFxuICAgICAgNzQsXG4gICAgICAxNTcsXG4gICAgICAyNDMsXG4gICAgICAxMzUsXG4gICAgICAxOTgsXG4gICAgICA0MyxcbiAgICAgIDY5LFxuICAgICAgMTQ5LFxuICAgICAgMTI3LFxuICAgICAgMjQzLFxuICAgICAgNzMsXG4gICAgICAxMzIsXG4gICAgICAyMDMsXG4gICAgICAxNjUsXG4gICAgICAxMDIsXG4gICAgICAxNDYsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTVlTNkoyTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NjEzNjQ3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRXZpbFwiLFxuICAgIFwibGlkXCI6IFwiMTY4MzY3NTY2NjQ3NDIxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjd3L0lVSUVPNkIxTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGTHpmZ1JaTWQ3bktqVXlJa1BwNlo0clUzSWlsZk9PSkxoTEprQTZVRWxjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5ZNkovQmJ2TmZkR1ZuYmRrS3V1N1RWNWs2WmM4VC84TFVJMkJsYXh2ZTBuVUZyTmRkLyt0T0d4Q0xRa20rQ0hPRE9ta2Y4OUV5aGJwS1BnMDNvT0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlovWGxjdzl4TjFPZ1lIOUIvM3VqQ2JmVnFFV2RQVmc5aHA0NUlPVy8yaEQ0Uk9iellXcGFRNVhoTEJnTWtndFpQb295K0RlWCtWbGhla1U0L1RFSmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjYxMzY0NzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA0MTEzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVmNPMXhSd1dJQlhoRC83ck5ncDN5K3N3ZUh3MGtscVM1VFNIbCt4VHRXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTYwMDE1NDU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEwNDExMzk5MzlcIn0iCn0="
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
