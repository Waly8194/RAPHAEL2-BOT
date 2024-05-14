const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, { conn, isAdmin, isBotAdmin, isGroupAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin && !isBotAdmin && !isGroupAdmin) {
        await conn.reply(m.chat, `*≡ تم اكتشاف رابط*
            
    نحن لا نسمح بالروابط من مجموعات أخرى
    عذراً @${m.sender.split('@')[0]} ستتم طردك من المجموعة`, null, { mentions: [m.sender] } )
        
        await conn.sendMessage(m.chat, { delete: m.key })
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }

    return !0
}

export const run = async ({ conn, args, isAdmin, isGroupAdmin, isBotAdmin }) => {
    if (!isAdmin && !isGroupAdmin && !isBotAdmin) return
    
    const action = args[0].toLowerCase()

    if (action === 'منع_روابط') {
        let chat = global.db.data.chats[args[1]]
        if (!chat) return

        chat.antiLink = !chat.antiLink

        await conn.reply(args[1], `خاصية منع الروابط تم ${chat.antiLink ? 'تفعيلها' : 'تعطيلها'}`, null, { sendEphemeral: true })
    }
}
