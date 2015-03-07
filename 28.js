// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed 
// which will always be a positive integer and return its additive persistence which is the number of times you 
// must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should 
// return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 


//make sure its a positive integer? 


function AdditivePersistence(num) {

	var myArray = num.split('')

	console.log(myArray);

	if (myArray.length >= 2) {

		var num = 0

		for (i in myArray) {
			
			num += myArray[i];
		}

	} else {

		console.log(myArray.length)
	}

//while currentnum.length > 1 
//do...
	//split string ('')
	//save variables
	//add them togther
	//answer = current num .. repeat
//else return currentnum

}


AdditivePersistence("2718")


function MultiplicativePersistence(num) {

	if (num.toString().length >= 2){
		var digits = num.toString().split('');
		var newnum =  digits[0] * digits[1];
		numoftimes += 1;
		MultiplicativePersistence(newnum);
	} else {
		return numoftimes;
	}
}

