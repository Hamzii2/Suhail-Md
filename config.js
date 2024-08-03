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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145812836‪";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_03_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVkVW5CRXpuTlFNR21WOUt6Q0Zxdy9XdlJyZXVBUUR1VHBpMFI2aFM2MHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NTgxMjgzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDE4QzkyMzMxMDc1OTAzRjA0QTQxMkQ1REUyRUFFN0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzA0NTk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBnYVZydHlFVFp1OVpHMzdSRm5WRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGZkMTYzZGUtMDFkNS00NjFmLWE4OTctMmZjYjY1M2MzNGEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMzAsXG4gICAgICA5MixcbiAgICAgIDc2LFxuICAgICAgNzIsXG4gICAgICAyMTIsXG4gICAgICA4LFxuICAgICAgMjIwLFxuICAgICAgNTEsXG4gICAgICAyMzUsXG4gICAgICAyNTEsXG4gICAgICAyMTMsXG4gICAgICAxMzgsXG4gICAgICAxNzIsXG4gICAgICAzMSxcbiAgICAgIDExMyxcbiAgICAgIDIzOSxcbiAgICAgIDE1NyxcbiAgICAgIDUzLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDEyNyxcbiAgICAgIDY4LFxuICAgICAgMTQ5LFxuICAgICAgMjEzLFxuICAgICAgNDgsXG4gICAgICAzLFxuICAgICAgMjE4LFxuICAgICAgMjQ2LFxuICAgICAgNDYsXG4gICAgICAxMzcsXG4gICAgICAxNixcbiAgICAgIDI3LFxuICAgICAgMTgzLFxuICAgICAgMjI4LFxuICAgICAgMTQ3LFxuICAgICAgMjQ1LFxuICAgICAgMTAwLFxuICAgICAgMzcsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlk0R1ZQRU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDU4MTI4MzY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLLoeG1ksqz4bWI8J2RsPCdkpTwnZKT8J2SgvCdkobwnZKNIOKAoFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjEyNTkyODQ5MDEwOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTS3F0UUZFTTdGdWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOEtmSVlGOW1rRk55RFNDaVFVK2pIMkxlMjFlY29mZ1NPYVU4dTZpR2sxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzbFNETXRYR3ZOM2NtZU1KN2hPUW5Vd0hDb2Q4SHZoMEtWay9UV2ZySjhzK24rZXdJMUsxMTJzd3FpZ1UrdGhzbzBibEszRm4yVG5uaTFYQUJoeWNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMjlqMHBldnVXR2dFcXpVdDNqQjE5UjR0cXkyNjhVZHFVWUhUZHo0RzFWc2l0WmxRODZ4VS8yK1drQWtYenIxN3U3cFRnUjgvR04rM0FzZU5ld0tCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ1ODEyODM2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjcwNDU5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk3V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTdXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMkFWTmI1MTdBK3UwekRKeTNnTDBWUnoyd09CZHZVR1RHQXJmamNYSXhRaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTE5MDI3NDYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3MDQ1OTUwOThcIn0iCn0="
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
