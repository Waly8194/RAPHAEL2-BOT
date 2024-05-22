const dir = [
'https://telegra.ph/file/03a8607079cbe51fb5826.jpg',
'https://telegra.ph/file/699b70394e33721d30290.jpg',
'https://telegra.ph/file/599b9eb698b122fccb2f9.jpg',
'https://telegra.ph/file/5b57cad5c5d52f9a23604.jpg',
'https://telegra.ph/file/1936aa2418188eeb9fde2.jpg',
'https://telegra.ph/file/1bac4a976162ed0236a6b.jpg',
'https://telegra.ph/file/2fa76f4b2390f8358d974.jpg',
'https://telegra.ph/file/b9ae54de2eff7bd9e0fd4.jpg',
'https://telegra.ph/file/319f63b15237959db9e4d.jpg',
'https://telegra.ph/file/0359dec7e8b0c3d207196.jpg',
'https://telegra.ph/file/016bfd36d7354286ee7d7.jpg',
'https://telegra.ph/file/a8247b4c4e6eb44a3ab0a.jpg',
'https://telegra.ph/file/0da101ede37bcfefd07ee.jpg',
'https://telegra.ph/file/2346d5440c10bf4cce539.jpg',
'https://telegra.ph/file/d94eb57159f3b60a0d3e0.jpg',
'https://telegra.ph/file/1c4ed52e4fa5457424da2.jpg',
'https://telegra.ph/file/a48eda1c706a7bba67744.jpg',
'https://telegra.ph/file/8aab2cd8d55cf9b4af833.jpg',
'https://telegra.ph/file/12798c2c631cc563e8cf3.jpg',
'https://telegra.ph/file/5b3dd6fefa8196be44273.jpg',
'https://telegra.ph/file/96f31a4999efbc7208929.jpg',
'https://telegra.ph/file/16ce440ab13737a591015.jpg',
'https://telegra.ph/file/5b315a0900760e0e2cb6c.jpg',
'https://telegra.ph/file/e70b81108bcf2303504a5.jpg',
'https://telegra.ph/file/62dd971bfe424dad14f03.jpg',
'https://telegra.ph/file/0cda9116276fba3cfb1f3.jpg',
'https://telegra.ph/file/08118dc844fa00bca1c48.jpg',

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['تحرش_ميتسوري', 'تحرش_بنت_اكيرا'] 

export default handler
