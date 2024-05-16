import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isSticker = false
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        if (/webp|image|video/g.test(mime)) {
            if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*لا يمكن أن يزيد الفيديو عن 7 ثوانٍ*')
            let media = await q.download?.()

            if (!media) throw `*يرجى الرد على ملصق أو صورة أو إدراج رابط الصورة. يجب أن يتم تحويلها إلى ملصق ، يرجى الرد أو استخدام الأمر ${usedPrefix + command}*`

            let output
            try {
                isSticker = await sticker(media, false, global.packname, global.author)
            } catch (e) {
                console.error(e)
            } finally {
                if (!isSticker) {
                    if (/webp/g.test(mime)) output = await webp2png(media)
                    else if (/image/g.test(mime)) output = await uploadImage(media)
                    else if (/video/g.test(mime)) output = await uploadFile(media)
                    if (typeof output !== 'string') output = await uploadImage(media)
                    isSticker = await sticker(false, output, global.packname, global.author)
                }
            }
        } else if (args[0]) {
            if (isUrl(args[0])) isSticker = await sticker(false, args[0], global.packname, global.author)
            else return m.reply('*الرابط غير صالح. يجب أن يكون الرابط لصورة بامتداد ‏jpg على سبيل المثال.*')
        }
    } catch (e) {
        console.error(e)
        if (!isSticker) isSticker = e
    } finally {
        if (isSticker) {
            // إذا كانت الملصقة موجودة، يتم إرسالها كصورة
            conn.sendFile(m.chat, isSticker, 'sticker.webp', '', m)
        } else {
            throw '*خطأ، يرجى المحاولة مرة أخرى. لا تنسَ الرد على ملصق أو صورة أو إدراج رابط الصورة.*'
        }
    }
}

handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>', 'لصورة (caption|reply sticker)']
handler.tags = ['sticker']
handler.command = /^ستك|ملصق?$/i
handler.command = /^لصورة$/i // هنا نقوم بتعريف الأمر الجديد لتحويل الملصقات إلى صور

export default handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
                      }
