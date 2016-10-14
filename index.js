var ffmpeg = require('ffmpeg');
var process = new ffmpeg('avfoundation')
// could be useful
// < /dev/null ffmpeg -f avfoundation -i "1" -preset ultrafast -tune zerolatency -f avi pipe:1
//< /dev/null ffmpeg -f avfoundation -i "1:0" -f avi pipe:1 higher quality
