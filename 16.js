 // Using the JavaScript language, have the function ArithGeo(arr) take 
 // the array of numbers stored in arr and return the string "Arithmetic" 
 // if the sequence follows an arithmetic pattern or return "Geometric" if
 // it follows a geometric pattern. If the sequence  doesn't follow either 
 // pattern return -1. An arithmetic sequence is one where the difference 
 // between each of the numbers is consistent, where as in a geometric 
 // sequence, each term after the first is multiplied by some constant or
 // common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example:
 // [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will
 // not be entered, and no array will contain all the same elements.


function Arithmatic(arr) {

	var diff = arr[1] - arr[0]; // difference between the first two numbers

	for (i in arr) {

		if (i > 0) {

			 if (i <= arr.length-1) {

				if (arr[i] == arr[i-1]) { // -1

				console.log(arr[i]);

				}

			}

		}

	}

}

function Geometric(arr) {

var multiple = arr[1] / arr[0]

}

function ArithGeo(arr) {

	// if Arithmatic(arr) {
	// return "Arithmatic" // distance between numbers is consistent 
	// } else if Geometric(arr) {
	// return "Geometric" // common ration 2, 6, 18, 54
	// } else {
	// return -1 // neither
	// }
	
}

console.log(Arithmatic([2, 2, 4, 6, 8]));

