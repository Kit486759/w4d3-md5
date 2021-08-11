const process = require('process')
const text = process.argv[2]

const crypto = require('crypto');
const hash = crypto.createHash('md5');



const data = hash.update(text, 'utf-8');
const gen_hash = data.digest('hex');

console.log(process.argv[2])

console.log(`text "${text}" hash: ${gen_hash}`);
