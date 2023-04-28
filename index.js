
const fs = require('fs');
const tmi = require('tmi.js');
var path = require('path');
folder = path.resolve(__dirname) + '\\log\\';

const client = new tmi.Client({
    channels: ['32comma'] //<-- channel name
});

client.connect();

console.log('Server is running ');


client.on('message', (channel, tags, message, self) => {
    //let content = `${tags['display-name']}: ${message}\n`;


    // set chat message log folder -- timestamp save
    fs.writeFile(folder + `${new Date().getTime()}.txt`,
        message, { flag: 'a+' }, err => { });
    console.log(message);
});

