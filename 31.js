function isPrime(n) {

	for(var m = 2; m < n; m++){

	    if(n % m === 0){

			return false;
	    }

	}

	return true;

}

function allPrimesBetween(a, b) {

	for(var i = a; i <= b; i++) {

		if (isPrime(i) === true){

			console.log(i);

		}

	}	
}

if(isPrime(4) == false) {console.log('passed')} else {console.log('failed')};
if(isPrime(7) == true) {console.log('passed')} else {console.log('failed')};

console.log(allPrimesBetween(30, 50));