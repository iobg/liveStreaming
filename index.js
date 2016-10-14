const ffmpeg = require('fluent-ffmpeg')
const command =ffmpeg()
const fs = require('fs')
var path = require('path')
const exec = require('child_process').exec


const read = fs.createReadStream('out.mpg')
fs.watch('out.mpg', (eventType, filename) => {
  if (filename) {
    read.pipe(process.stdout)
  } else {
    console.log('file not found');
  }
});

