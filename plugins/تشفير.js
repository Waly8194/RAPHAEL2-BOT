
import js from 'javascript-obfuscator';

let handler = async (m, { conn, text }) => { 
    if (!m.quoted.text) throw 'قم بالرد على الكود الذي تريد تشفيرة!';

    let res = js.obfuscate(m.quoted.text, {
        compact: true,
        controlFlowFlattening: true, 
        controlFlowFlatteningThreshold: 1.0, 
        deadCodeInjection: true, 
        deadCodeInjectionThreshold: 1.0, 
        debugProtection: true, 
        debugProtectionInterval: 4000, 
        disableConsoleOutput: true, 
        domainLock: [],
        domainLockRedirectUrl: 'about:blank',
        forceTransformStrings: [],
        identifierNamesCache: null,
        identifierNamesGenerator: 'hexadecimal',
        identifiersDictionary: [],
        identifiersPrefix: '',
        ignoreRequireImports: false,
        inputFileName: '',
        log: false,
        numbersToExpressions: true, 
        optionsPreset: 'default',
        renameGlobals: true, 
        renameProperties: true, 
        renamePropertiesMode: 'safe',
        reservedNames: [],
        reservedStrings: [],
        seed: 0,
        selfDefending: true, 
        simplify: true,
        sourceMap: false,
        sourceMapBaseUrl: '',
        sourceMapFileName: '',
        sourceMapMode: 'separate',
        sourceMapSourcesMode: 'sources-content',
        splitStrings: true, 
        splitStringsChunkLength: 5, 
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayCallsTransformThreshold: 1.0, 
        stringArrayEncoding: ['base64'], 
        stringArrayIndexesType: ['hexadecimal-number'],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 5, 
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 5, 
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 1.0, 
        target: 'browser',
        transformObjectKeys: true, 
        unicodeEscapeSequence: true 
    }).getObfuscatedCode();
  
    if (!res) throw "خطأ :(";
    return m.reply(res);
}

handler.help = ['enc']
handler.tags = ['tools']
handler.alias = ['enc']
handler.command = /^(enc|تشفير)$/i

export default handler;
