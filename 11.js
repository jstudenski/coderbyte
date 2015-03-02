  // Using the JavaScript language, have the function ABCheck(str) take 
  // the str parameter being passed and return the string true if the 
  // characters a and b are separated by exactly 3 places anywhere in the 
  // string at least once (ie. "lane borrowed" would result in true because
  // there is exactly three characters between a and b). Otherwise return 
  // the string false.

function ABCheck(str) {



  var myArray = str.split('');

  for (i in myArray) {

    if (myArray[i] == "a" || myArray[i] == "b") {

      if (myArray[i - 4] == "b") { // i - 4 doesnt work
         console.log("true");
      }



    } else {

      console.log("false");

    }

  }

};

console.log(ABCheck("lane borrowed"))