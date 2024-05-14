const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
    if (!message.fromMe) return;
    if (!message.isGroup) return;
    if (!message.isGroupMsg) return;
    
    const chat = await message.getChat();
    const admins = await chat.fetchAdmins();

    if (!admins.map(admin => admin.id._serialized).includes(client.user.id._serialized)) return;

    if (message.body.toLowerCase().startsWith('.تغير_بروفايل')) {
        const attachmentData = await message.downloadMedia();
        await client.setProfilePic(attachmentData);
        await message.reply('تم تغيير صورة البروفايل بنجاح!');
    }
});

client.initialize();
