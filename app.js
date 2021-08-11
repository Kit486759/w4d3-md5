const process = require('process')
const fs = require('fs')
const text = process.argv[2]

const crypto = require('crypto');
const hash = crypto.createHash('md5');

if (text) {
    const data = hash.update(text, 'utf-8');
    const gen_hash = data.digest('hex');
    console.log(process.argv[2])
    console.log(`text "${text}" hash: ${gen_hash}`);
}

fs.readFile('./text.txt','utf-8', function(err, text){
    console.log(text)
    const data = hash.update(text, 'utf-8');
    const gen_hash = data.digest('hex');
    console.log(`text "${text}" hash: ${gen_hash}`);
})