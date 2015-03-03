function operate(a, b, x){

return x(a,b)


}


function add(a,b) {
return a + b;

}

function subtract(a,b) {
return a - b;

}

console.log(operate (4, 5, add))
