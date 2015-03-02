
var myArray = str.split('');

// Recursion

function fac(n) { 

	if (n == 0)
	return 1; else
	return fac(n - 1) * n; 

}


// The difference between writing a function and invoking a function

function SimpleAdding(num) { 

var total = 0;

    for (i = num; i >= 1; i--) {
        total += i;

    }
    return total;

}

console.log(SimpleAdding(3))


// Iterating through an array or an object using a for or while loop


	while (i < 10) {
	    text += "The number is " + i;
	    i++;
	}


	for (i in myArray) {

		myArray[i] = ReplaceLetter(myArray[i]);
	}


// Using if statements to let your code make decisions


	if (i == 25) {
		i = 0
	} else {
		i += 1
	}


// Passing functions as arguments to other functions (callbacks) 


var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var vowels = ["a", "e", "i", "o", "u"];

function ReplaceLetter(s) {

	i = alphabet.indexOf(s)

	if (i < 0) {
		// s is not a lower case letter
		i = capitals.indexOf(s)

		if (i < 0) {
			return s
		}

		if (i == 25) {
			i = 0
		} else {
			i += 1
		}

		return capitals[i]

	}

	// s is a lower case letter

	if (i == 25) {
		i = 0
	} else {
		i += 1
	}

	if (vowels.indexOf(alphabet[i]) >= 0) {  // if lower case vowel is found
		return capitals[i];
	}

	return alphabet[i]

}


function LetterChanges(str) {


	var myArray = str.split('');

	for (i in myArray) {

		myArray[i] = ReplaceLetter(myArray[i])
	}

	return myArray.join('') ; // return final array
}

console.log(LetterChanges("hello hello az AB! zzzzzzz; ; ;; 33"))
