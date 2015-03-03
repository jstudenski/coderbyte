function isPrime(n) {

	for(var i = 2; i < n; i++){

	    if(n % i === 0){

			return false;
	    }

	}

	return true;

}

function allPrimesBetween(b) {

	for(var i = 1; i <= b; i++) {

		// console.log(i);


		if (isPrime(i) === true){

			console.log(i);
			return;
		}



	}	
}

if(isPrime(4) == false) {console.log('passed')} else {console.log('failed')};
if(isPrime(7) == true) {console.log('passed')} else {console.log('failed')};

console.log(allPrimesBetween(30));

