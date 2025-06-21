//problem - Given a number write a function to determine whether the no. is prime or not
 
//approach 

//input - 2 output -prime 
//input - 4 not prime

// check if divisible by any no less than given number not prime /prime 
//Loop

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return "Not Prime"
        }
    }
    return "Prime"
}

let ans = isPrime(11);
console.log(ans);

//Pattern problem -1

// Problem - 1 Given a value n - print the following pattern

// approach
//i/p - 2 op- 2 X 2 stars
//i/p - 4 op- 4 X 4 stars
//Loop row
//Loop column

function printStar(n){
    for (let row = 1; row <= n; row++) {
      for (let j = 1; j <= n; j++) {
        console.log("*");
      }
    }
}

let star = printStar(2);
console.log(star)
