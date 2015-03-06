// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed 
// which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on 
// the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's 
// stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your 
// program should return that new set with integers separated by commas. For example: if strArr is 
// ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 


//step through array, create variable currentsmallest and update with smallest number until an E is reached
//smallest number it taken out
//When E is reached add current smallest to newArray
//Clear current smallest
//4 and 1 get removed, therefore 5 is the smallest (4,1,5)


//Sort array function, pop smallest when E is reached

function SortLowToHigh(a, b) {
	return a - b;
}

function OffLineMinimum(strArr){

	currentlargest = 0;
	myarray = [];

	for (var i = 0; i < strArr.length; i++) {


	//	if (strArr[i] > currentlargest)
    //	currentlargest = strArr[i]   		
	//	}
    //    	console.log(currentlargest)
    	
        if (strArr[i] == "E") {
             console.log(myarray.pop());
        } else {
            myarray.push(strArr[i]);
            myarray.sort(SortLowToHigh)
        }
	}
}

OffLineMinimum([1, 6, 4, 4, "E", 8, 2, "E", "E",  4, 2])

