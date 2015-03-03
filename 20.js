// Using the JavaScript language, have the function DivisionStringified(num1,num2
// take both parameters being passed, divide num1 by num2, and return the result
// as a string with properly formatted commas. If an answer is only 3 digits
// long, return the number with no commas (ie. 2 / 3 should output "1"). For
// example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

function DivisionStringified(num1,num2) {

	newnum = Math.floor(num1/num2);


	var digits = newnum.toString().length;

	var commas = Math.floor(digits / 3);

	// while (commas >= 0) {

	 
	        //.pop() 


	//}

	// var myArray = newnum.split('');

	// var myArray = myArray.join('');

// console.log(newnum);

// // convert to while loop?

// 	if newnum.length > 3 {

// 	} else {
// 		return num 
// 	}

	console.log(newnum);
	console.log(digits);

}

console.log(DivisionStringified("123456789","10000"));

