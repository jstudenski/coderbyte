//  Using the JavaScript language, have the function FirstReverse(str) take the  
//  str parameter being passed and return the string in reversed order. 


function FirstReverse(str) { 

  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];

  str = o; 
  // code goes here  
  return str; 
         
}

console.log(FirstReverse("hello"));