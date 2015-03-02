// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers 
// from 1 to num.For the test cases, the parameter num will be any number from 1 to 1000.  

function SimpleAdding(num) { 

var total = 0;

    for (i = num; i >= 1; i--) {
        total += i;

    }
    return total;

}


console.log(SimpleAdding(3))


