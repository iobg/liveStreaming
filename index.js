'use strict'
const fs = require('fs')
var exec = require('child_process').exec;
exec('screencapture screenshot.png', function (err){
	if(err){
		console.log(err)
	}
})
	
