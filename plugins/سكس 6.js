import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `*[🫦] اعمل منشن علي الشخص الي مديقك*\n\n*—◉ مثل:*\n◉ ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "SheikhTom - 𝙱𝚘𝚝";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/sfw/Sex);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2} n\Slap `, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `*[❗] حصل خطأ*`;
  };
};
handler.help = ["slap"];
handler.tags = ["General"];
handler.command = /^(siks6|سكس)$/i;
export default handler;
