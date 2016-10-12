'use strict'
const fs = require('fs')
var exec = require('child_process').exec;

const getScreenshot=()=>{
	return new Promise((resolve,reject)=>{
		exec('screencapture screenshot.png', function (err){
			if(err){
				console.log(err)
				reject()
						}
						resolve()
					})

				})
			}
			
getScreenshot().then(()=>{
	let read = fs.createReadStream('screenshot.png')
		read.pipe(process.stdout)
})
		


