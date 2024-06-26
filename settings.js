//Código editado i arreglado pot Eliasar YT
//variable definida definida por Eliasar YT n2
const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["50582340051", "Owner", true], ["51929838430"], ["12345678"]]
//remplaza 123456789 por Tu número de teléfono
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "𝐘𝐮𝐆𝐢-𝐁𝐎𝐓[𝐌𝐃]"
global.wm = '𝐘𝐮𝐆𝐢-𝐁𝐎𝐓[𝐌𝐃] 🌐'
global.vs = '1.3'

//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Bogota' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "𝐘𝐮𝐆𝐢-𝐁𝐎𝐓[𝐌𝐃] |creador ELIASAR YT"
global.author = `${vs}`
 
//---------[ IMAGEN ]---------
global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = fs.readFileSync('./media/menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/Eliasar54/YuGi-BOT-1.2.git'
global.yt = 'https://www.youtube.com/@Eliasar_yt'
global.tiktok = 'https://www.tiktok.com/@eliasar_yt?_t=8mjJpoJfOBK&_r=1'
global.fb = 'https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD'
global.faceb = 'https://www.facebook.com/profile.php?id=100087710532984&mibextid=kFxxJD'
global.paypal = 'https://www.paypal.me/EliasarMoncada72' 

global.host = 'https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV' //Infinity-host
global.nna = 'https://whatsapp.com/channel/0029VadnbrgBVJlB50Se1n0j' //Update 
global.nn = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //𝐘𝐮𝐆𝐢-𝐁𝐎𝐓
global.nn2 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //test
global.nn7 = 'https://chat.whatsapp.com/GFgaQyuU6Ux92CZ6WkrJV3' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/JHnIQUdCGBHHsA6naIGjHG' //enlace YuGi-BOT
global.multi = 'https://chat.whatsapp.com/CBY978TEw5N10tRhQiapZV' //Grupo náufrazapp
global.nna2 = 'Em4Byf4w5VgHObPvZQlfnM'
global.n2 = "https://whatsapp.com/channel/0029VadnbrgBVJlB50Se1n0j"
//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '⌚'
global.dmoji = '🤭'
global.done = '✅'
global.error = '✖️' 
global.xmoji = '🔞' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 124 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '3' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
