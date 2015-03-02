  // Using the JavaScript language, have the function LetterCapitalize(str)
  // take the str parameter being passed and capitalize the first letter of
  // each word. Words will be separated by only one space.

function LetterCapitalize(str) {

	var myArray = str.split('');

	for (i in myArray) {

		if (i == 0) { // first letter

			myArray[i] = myArray[i].toUpperCase();
		};

		if (myArray[(i-1)] == ' ') {

			myArray[i] = myArray[i].toUpperCase();
		};

	}

	return myArray.join('') ; // return final array

};

console.log(LetterCapitalize("blah blah blah hhhh"));