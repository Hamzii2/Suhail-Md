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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_28_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmWDVBaG5XWFQydzdrLzg3UHpDczVLR1pFeDk0bm0vdW9UdUExVFJ4Unp3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrVDIxNVlqX1QxVzNJR3BoS0RjLWl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4ZDgzNmY5LTNlZGMtNDRiOC1hNjhkLWM1YzZhZTA2ZTU5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDMwLFxuICAgICAgMTg4LFxuICAgICAgMTM2LFxuICAgICAgMjYsXG4gICAgICAyMjAsXG4gICAgICA0NyxcbiAgICAgIDI0MixcbiAgICAgIDgxLFxuICAgICAgMjAxLFxuICAgICAgMjMsXG4gICAgICA5MyxcbiAgICAgIDk1LFxuICAgICAgNTksXG4gICAgICAyMTYsXG4gICAgICAxMDksXG4gICAgICAyNSxcbiAgICAgIDIxMyxcbiAgICAgIDI1MCxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTU3LFxuICAgICAgMTA1LFxuICAgICAgODIsXG4gICAgICA4OCxcbiAgICAgIDE2MyxcbiAgICAgIDExMCxcbiAgICAgIDEyLFxuICAgICAgODEsXG4gICAgICAyMjAsXG4gICAgICA4OCxcbiAgICAgIDI0NyxcbiAgICAgIDIyOCxcbiAgICAgIDc1LFxuICAgICAgMTA5LFxuICAgICAgMjEzLFxuICAgICAgMTk5LFxuICAgICAgMTUzLFxuICAgICAgMTM0LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk41R0VFTVhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY4MzgzMzk2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDg3MjIxMDEwMTQ3MTg6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2To/Cdk7vwnZSC8J2TtvCdk64g8J+YiPCfq7Twn5Sq4bWNyrPhtYnKuFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002c28rVUxFSXo2dXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3AwVGVnWVplYmJ3UFRvZUpseDZrc2tSTVpWQlAxWG1nb2lIUStNUVBEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKcTBxckNuQk54RU5CN214L0diRnk4UTh1cEM3aThCRlA3SUNoZlh0THlodm93UnZlUmpKU0RZdENObHY0MzhsZzVMTXA5MTc4QjBmd21mWjYzY3poQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuZTBoMlNmbkJkYzB3YUo4d1V2VDVrSmFialBvbFRPUncxbm9IeVRoOStRL2hSYlNxejJsc1BWdTMvWTJwVDlsN1pibnZ3c1BESjFnOXJsRlBkc0lnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY4MzgzMzk2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3Mjc2OTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN5Ti5qc29uIjogIntcImtleURhdGFcIjpcIkw4NDRMNkg5M0h4a2JNNzJRdEZkTkRXWXJ1cHJtWHBuV0xWWjQ0ZGdvcms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE2NTE4MTUxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzI3Njk2OTM1XCJ9Igp9"
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
