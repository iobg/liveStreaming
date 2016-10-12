'use strict'

var ScreenRecorder = require('screen-recorder').ScreenRecorder
var path = require('path')
var fs = require('fs')


		var movie = new ScreenRecorder(path.resolve(__dirname, 'new.mp4')) // [, displayId]
		movie.setCapturesMouseClicks(true)
		movie.setCropRect(0, 0, 2560, 1600)
		movie.setFrameRate(30) // default is 15
		movie.recordAudio()
		movie.start()



let watch=fs.watchFile('new.mp4',(curr,prev)=>{
	if(curr.size!=0){
		let read = fs.createReadStream('new.mp4')
		read.pipe(process.stdout)
	}
	
})


setTimeout(function() {
  movie.stop()
  fs.unlink('new.mp4')
}, 10000)
