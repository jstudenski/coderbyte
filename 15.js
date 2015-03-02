 //  Using the JavaScript language, have the function Palindrome(str) take
 //  the str parameter being passed and return the string true if the
 //  parameter is a palindrome, (the string is the same forward as it is 
 //  backward) otherwise return the string false. For example: "racecar" is 
 //  also "racecar" backwards. Punctuation and numbers will not be part of the
 //  string. 
 // 


function Palindrome(str) {

	var myArray = str.split('');

	var revArray = myArray.reverse(); // how do I use .reverse only once?

	var myArray = str.split(''); 
	
	for (i in myArray) {

		if (myArray[i] == revArray[i]) {

		} else {

			return false;
		}
	}

	return true;
};


console.log(Palindrome("ho4oh"))

// Fix test cases:
//  When the input was "dont nod" your output was incorrect
//  When the input was "do geese see god" your output was incorrect
//  When the input was "never odd or even" your output was incorrect