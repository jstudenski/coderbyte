 // Using the JavaScript language, have the function SecondGreatLow(arr) take the
 // array of numbers stored in arr and return the second lowest and second
 // greatest numbers, respectively, separated by a space. For example: if arr
 // contains [7, 7, 12, 98, 106] the output should be 12 98.The array will not be
 // empty and will contain at least 2 numbers. It can get tricky if there's just
 // two numbers!





function SecondGreatLow(arr) {

	var arr = arr.sort(function (a, b) { 
	    return a - b;
	});

// When the sort() method compares two values, it sends the values to the compare function, 
// and sorts the values according to the returned (negative, zero, positive) value.

// Example:
// When comparing 40 and 100, the sort() method calls the compare function(40,100).
// The function calculates 40-100, and returns -60 (a negative value).
// The sort function will sort 40 as a value lower than 100.


//second lowest
	var slowest = arr[1];
	var sgreatest = arr[arr.length -2];

	return slowest + " " + sgreatest


 // sort array, rerturn newarray[1] new array[array.length] 

}




console.log(SecondGreatLow([100, 7, 7, 12, 98, 106]));


// fix!
// When the input was (2,2,2,5,5,5,6) your output was incorrect.
// When the input was (7, 7, 90, 1000003) your output was incorrect.