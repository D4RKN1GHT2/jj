/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */

import fetch from 'node-fetch' 
import fs from 'fs'
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
  let who = m.sender
  let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `BY JAVAN SHOP ID`,
    orderTitle: `${ucapan()}`,
    thumbnail:   await conn.resize(await (await fetch(pp)).buffer(), 300, 250),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [
                {
                  "title": `[🧾] Semua Perintah`,
                  "description": "Memberikan Semua Fitur Bot",
                  "rowId": ".allmenu"
                }, {
                  "title": "[🕋] Islam",
                  "description": "Menu Tentang Islam",
                  "rowId": ".? quran"
                }, {
                  "title": "[🏫] Edukasi",
                  "description": "Menu Edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "[📰] News",
                  "description": "Menu Berita",
                  "rowId": ".? News"
                },  {
                  "title": "[🎮] Game",
                  "description": "Menu Game",
                  "rowId": ".game"
                }, {
                  "title": "[🗺️] Epic Rpg",
                  "description": "Menu Game RPG",
                  "rowId": ".rpg"
                }, {
                  "title": "[📈] XP",
                  "description": "XP Dan Level",
                  "rowId": ".xp"
                }, {
                  "title": "[🖼️] Random Image",
                  "description": "Menu Foto Random",
                  "rowId": ".? image"
                }, {
                  "title": "[🎇] Stiker",
                  "description": "Menu Buat Stiker",
                  "rowId": ".stikerr"
                }, {
                  "title": "[🐚] Kerang Ajaib",
                  "description": "Menurut Kerang ajaib....",
                  "rowId": ".kerangg"
                }, {
                  "title": "[📑] Quotes",
                  "description": "Menu Quotes",
                  "rowId": ".menuquotes"
                }, {
                  "title": "[🏛️] Admin",
                  "description": "Menu Admin Group",
                  "rowId": ".? admin"
                }, {
                  "title": "[🏢] Grup",
                  "description": "Menu Group",
                  "rowId": ".grup"
                }, {
                  "title": "[🔝] Premium",
                  "description": "Menu Untuk Premium",
                  "rowId": ".premium"
                }, {
                  "title": "[🖥️] Internet",
                  "description": "Cari Sesuatu Di Bot",
                  "rowId": ".internet"
                }, {
                  "title": "[🥷] Anonymous",
                  "description": "Mainkan Anonymous Chat",
                  "rowId": ".anonymous"
                }, {
                  "title": "[✒️] Nulis & Logo",
                  "description": "Menu Nulis & Logo",
                  "rowId": ".menunulis"
                }, {
                  "title": "[📺] Downloader",
                  "description": "Download Sesuatu Di Bot",
                  "rowId": ".downloader"
                }, {
                  "title": "[🔧] Tools",
                  "description": "Tools Yang Bisa di Gunakan Di Bot",
                  "rowId": ".tools"
                }, {
                  "title": "[🎇] Fun",
                  "description": "Menu Ceria",
                  "rowId": ".fun"
                }, {
                  "title": "[📂] Database",
                  "description": "Simpan Sesuatu Di Bot",
                  "rowId": ".? database"
                }, {
                  "title": "[📝] Vote & Absen",
                  "description": "Menu Vote & Absen",
                  "rowId": ".menuvote"
                }, {
                  "title": "[🎙️] Pengubah Suara",
                  "description": "Ubah Suaramu",
                  "rowId": ".? audio"
                }, {
                  "title": "[🎙️] Sound Music",
                  "description": "Dengar Music Singkat",
                  "rowId": ".? sound"
                }, {
                  "title": "[🎙️] Vn Imuet",
                  "description": "Mendengarkan Vn Yang Sangat Imuet",
                  "rowId": ".vn"
                }, {
                  "title": "[🤖] TopUp FreeFire",
                  "description": "Fitur Topup Otomatis",
                  "rowId": ".topupff"
                }, {
                  "title": "[⛩️] Anime",
                  "description": "Cari Anime Di Bot",
                  "rowId": ".anime"
                }, {
                  "title": "[ℹ️] Info",
                  "description": "Info Tentang Bot",
                  "rowId": ".menuinfo"
                }, {
                  "title": "[🔧] Virus",
                  "description": "Virus Yang Bisa Membuat Whatsapp Orang Ngelag/Error",
                  "rowId": ".menuvirtex"
                }, {
                  "title": "Tanpa Kategori",
                  "description": "",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "[🧑‍💻] Owner",
                  "description": "Menu Khusu Owner",
                  "rowId": ".menuowner"
                }
              ] 
            }
          ]
         const listMessage = {
      text: `${ucapan()} ${name}`,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul)}, m, {
  'document':{'url':'https://www.instagram.com/muqsith_0109/'},
'mimetype':global.dpdf,
'fileName':'Javan Shop Id',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://www.instagram.com/muqsith_0109/',
                        mediaType: 2,
                        description: `Javan Shop Id`,
                        title: `💌 My Ultah: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Javan Shop Id`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://www.instagram.com/muqsith_0109/'
                        
                      }}
})
  }
handler.help = ['menuu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menuu|\?|help)$/i

handler.fail = null

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
}
