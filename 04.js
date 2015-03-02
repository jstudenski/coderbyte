 // Using the JavaScript language, have the function LetterChanges(str) take
 // the str parameter being passed and modify it using the following algorithm
 // Replace every letter in the string with the letter following it in the
 // alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in
 // this new string (a, e, i, o, u) and finally return this modified string. 

// Capital and lower case letters ?

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capitals = ["A", "B", "C", "D"]
var vowels = ["a", "e", "i", "o", "u"]

// if -1 return origional value

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


