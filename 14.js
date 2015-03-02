
 // Using the JavaScript language, have the function ExOh(str) take 
 // the str parameter being passed and return the string true if there is 
 // an equal number of x's and o's, otherwise return the string false. Only 
 // these two letters will be entered in the string, no punctuation or 
 // numbers. For example: if str is "xooxxxxooxo" then the output should 
 // return false because there are 6 x's and 5 o's. 


function ExOh(str) {

	var myArray = str.split('');


	var x = 0;
	var o = 0;


	for (i in myArray) {

		if (myArray[i] == 'x') {

			x += 1

		} else if (myArray[i] == 'o'){

			o += 1

		} else {

			console.log("string not recognized")
		}
	}

	if (x == o) {

		return true;

	} else {

		return false;
	}
    
}


console.log(ExOh("xxxoooo"));
