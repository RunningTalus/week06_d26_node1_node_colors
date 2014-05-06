//islight.js

//PART II
//If luminosity value is greater than 155 return light

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var isLight = function(red, green, blue){
	var result = (0.2126*red + 0.7152*green + 0.0722*blue);
		// console.log(result);
	if (result > 155){
		console.log('light');
	} else {
		console.log('dark');
	}
};

isLight(r,g,b);

//in CLI type
	//node islight.js 255 239 213
		//logs light
	//node islight.js 50 15 25
		//logs dark
