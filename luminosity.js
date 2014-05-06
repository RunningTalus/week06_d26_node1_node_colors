//luminosity.js

//process.argv[0] --> refers to the executing program, i.e. node
//process.argv[1] --> refers to luminosity.js, i.e. this file
//process.argv[2] --> refers to red
//process.argv[3] --> refers to green
//process.argv[4] --> refers to blue

// process.argv[2];
// process.argv[3];
// process.argv[4] = blue;

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];


var luminosity = function (red, green, blue){	
	return (0.2126*red + 0.7152*green + 0.0722*blue);
};

// console.log( luminosity(r,g,b) );
return luminosity(r,g,b);