 // Using the JavaScript language, have the function LetterCountI(str) take the
 // str parameter being passed and return the first word with the greatest number
 // of repeated letters. For example:"Today, is the greatest day ever!" should
 // return greatest because it has 2 e's (and 2 t's) and it comes before ever 
 // which also has 2 e's. If there are no words with repeating letters return -1.
 // Words will be separated by spaces.

function NumberOfRepeatedLetters(str) {


	var frequency = [];

	for (var i=0; i<str.length; i++) {

		var character = str.charAt(i); // discovered charAt method

		if (frequency[character]) {
			frequency[character] += 1;

		} else {

			frequency[character] = 1;

		}

	}

	return frequency;

}

function LetterCountI(str) {

// split array at (' ')
// call on each word NumberOfRepeatedLetters(str) 
// if two words have same NORL, return the first one

}


console.log(NumberOfRepeatedLetters("sttttrr"))

