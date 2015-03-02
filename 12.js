// Using the JavaScript language, have the function VowelCount(str) 
// take the str string parameter being passed and return the number of 
// vowels the string contains (ie. "All cows eat grass" would return 5). 
// Do not count y as a vowel for this challenge. 

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function VowelCount(str) {

	count = 0;

	var myArray = str.split('');

	for (i in myArray) {

		if (vowels.indexOf(myArray[i]) >= 0) {

			count += 1;
		}
	}

	return count;
}

console.log(VowelCount("hello hello az AB! zzzzzzz; ; ;; 33"))


