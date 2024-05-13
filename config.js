import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['201276848689', '201276848689', true],
] //Number of owners

global.mods = ['201279800415', '201276848689'] 
global.prems = ['201279800415', '201276848689']


global.APIs = { // API Prefix
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { // Apikey : 42x5rO7o \\
  'https://api-fgmods.ddns.net': '42x5rO7o'
}

// Sticker WM
global.ownername = 'ديكو'
global.botname = 'روبين'
global.premium = 'false'
global.packname = 'روبين بــوت'
global.author = '201276848689 >> ديكو'


global.wait = '*[■■■■■■■■■□] 90%'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'


global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias //

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
