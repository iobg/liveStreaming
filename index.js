var ffmpeg = require('ffmpeg');
var process = new ffmpeg('avfoundation')
// could be useful
// < /dev/null ffmpeg -f avfoundation -i "1" -preset ultrafast -tune zerolatency -f nut pipe:1
