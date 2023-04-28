
const fs = require('fs');
const tmi = require('tmi.js');
const client = new tmi.Client({
    channels: ['32comma']
});

client.connect();

console.log('Server is running ');


client.on('message', (channel, tags, message, self) => {
    //let content = `${tags['display-name']}: ${message}\n`;
    fs.writeFile(`C:\\TEST\\TTS\\log\\${new Date().getTime()}.txt`,
        message, { flag: 'a+' }, err => { });
    console.log(message);
});

