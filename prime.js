
function primeCheck(n){
    if (n==2){
		console.log("prime")
        return true  
	} else if (n>1){
    	for ( i=2;i<n;i++)
    		if (n%i!==0){
			console.log("prime")
    		return true
    } else{
		console.log("not prime")
    	return false
        }
    }
}

primeCheck(30)
//     // Displays to the console if a number is a prime number
//     // or Notification, in the most efficient way
// }

// console.log(primeCheck(123))


