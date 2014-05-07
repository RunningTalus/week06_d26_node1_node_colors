//colorutil.js

module.exports = {
	luminosity: function (red, green, blue){	
		return (0.2126*red + 0.7152*green + 0.0722*blue);
	}

	// var r = process.argv[2];
	// var g = process.argv[3];
	// var b = process.argv[4];

	// luminosity(r,g,b);

};

