//islight.js

//PART II
//If luminosity value is greater than 155 return light

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var isLight = function(red, green, blue){
	var result = (0.2126*red + 0.7152*green + 0.0722*blue);
		console.log(result);
	if (result > 155){
		console.log('light');
	} else {
		console.log('dark');
	}
};

return isLight(r,g,b);


// if (luminosity > 155){
// 	console.log('light');
// } else {
// 	console.log('dark');
// };