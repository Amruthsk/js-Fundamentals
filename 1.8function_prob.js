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

// problem  0 print n stars in a line
// approach
// loop to repeate task for n rows
// Loop column repeate task for n columns  concatenate string of * stars n times 
function oneLine(n){
   for(let row = 1; row <=1; row++){
    //concatenate
    let star = " ";
    for (let col = 1; col <= n; col++) {
      star += "*";
    }
    console.log(star);
   }

      
}

let star = oneLine(5);
console.log(star);

// Problem - 1 Given a value n - print the Square pattern

// approach
//i/p - 2 op- 2 X 2 stars
//i/p - 4 op- 4 X 4 stars
//Loop row repeat task for n rows
//Loop column repeate task for n columns & concatenate

//Loop column

function printSquareStar(n){
  //loop
    for (let row = 1; row <= n; row++) {
      //concatenate
        let star =" ";
      for (let j = 1; j <= n; j++) {
         star += "*";
      }
      console.log(star)

    }
}
//return - undefined
let Squarestar = printSquareStar(3);
console.log(Squarestar)


//Triangle pattern

// Problem - 1 Given a value n - print the Triangle pattern

// approach
//i/p - 2 op- 1,2  stars
//i/p - 4 op- 1,2,3,4 stars
//Loop row to repeate task for n rows
//Loop column repeate task for n columns- condition< = row & concatenate

function righttrianglepattern(n) {
  //loop
  for (let row = 1; row <= n; row++) {
    //concatenate
    let star = " ";
    for (let j = 1; j <= row; j++) {
      star += "*";
    }
    console.log(star);
  }
}
// return- undefined
let Trianglestar = righttrianglepattern(3);
console.log(Trianglestar);



//mirror Triangle pattern

// Problem - 1 Given a value n - print the mirror Triangle pattern

// approach
//i/p - 2 op- 1,2  stars - n-1 space
//i/p - 4 op- 1,2,3,4 stars- 
//Loop row to repeate task for n rows - for ith row 1)print n-1 space 2) print i star
//Loop column repeate task for n columns- condition< = row & concatenate

function invertedtrianglepattern(n) {
  //loop
  for (let row = 1; row <= n; row++) {
    //concatenate
    let spacestar = " ";
    for (let space = 1; space <= n-row; space++){
      spacestar += " ";

    }for (let col = 1; col <= row; col++) {
      spacestar += "*";
    }
    console.log(spacestar);
  }
}
// return- undefined
let InvertedTrianglestar = invertedtrianglepattern(4);
console.log(InvertedTrianglestar);
