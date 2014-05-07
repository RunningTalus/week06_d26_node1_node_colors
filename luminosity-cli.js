//luminosity-cli.js

var colorutil = require('./colorutil.js'); 

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

console.log(colorutil['luminosity'](r,g,b));
	//OR
		//console.log(colorutil.luminosity(r,g,b));

//1) node runs luminosity-cli.js
//2) luminosity-cli.js declares the variable colorutil
//3) node requires colorutil.js 
//4) colorutil.js assigns a value to module.exports
//5) the module export stores the single object literal {key:value} pair, or multiple key:values.
//6) the key is luminosity: the value is the function object/function expressions
//7) we want the object literal to be available to any file that requires colorutil.js
//8) we access this via colorutil
//9) we use dot or bracket notation to access the key luminosity
//10) we pass in the arguments that the function object luminosity expects
//11) we wrap this in a console log to log this in terminal


//typed into CLI
	// node luminosity-cli.js 255 239 213
		// logs 240.52439999999999

//typed into CLI
	// node luminosity-cli.js 50 15 25
		// logs 23.163
