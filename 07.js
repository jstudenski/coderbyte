  // Using the JavaScript language, have the function SimpleSymbols(str) take the
  // str parameter being passed and determine if it is an acceptable sequence by
  // either returning the string true or false. The str parameter will be
  // composed of + and = symbols with several letters between them (ie ++d+===+c++==a) 
  // and for the string to be true each letter must be surrounded by a + symbol
  // So the string to the left would be false. The string will not be empty and
  // will have at least one letter. 

function SimpleSymbols(str) {

  var myArray = str.split('');

  for (l in myArray) { 

    if (typeof myArray[l] == "string") {

        if ( myArray[l - 1] == '+' ) {  //  && myArray[l+1] == '+'

        console.log(l + "true")

        } else {

            console.log(l + "false")
        };
    };



  };

	// if letter[+1] && letter[-1] == "+"
};

console.log(SimpleSymbols("st+r+j"));