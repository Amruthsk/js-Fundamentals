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

console.log("pattern1")
//Pattern problem -1
// ****
// problem  0 print n stars in a line
// approach
// loop to repeate task for n rows- for each row
// inside row do Loop column repeate task for n columns  concatenate string of * stars n times 
function oneLine(n){
  //loop each row 
  // n=4,row = single row =1 ->  ****
   for(let row = 1; row <=1; row++){
     //loop to concatenate n star in each row
     let star = " ";
     for (let col = 1; col <= n; col++) {
       star += "*";
     }
     //after loop  we will have ****
     console.log(star);
   }

      
}

let star = oneLine(4);
console.log(star);


console.log("pattern2");
// Problem - 2 Given a value n - print the Square pattern
// ***
// ***
// ***
// approach
//i/p - 2 op- 2 X 2 stars
//i/p - 4 op- 4 X 4 stars
//Loop row repeat task for n rows - for each row
//inside row Loop column repeate task for n columns & concatenate

//Loop column

function printSquareStar(n){
  //loop each row n=3 row =3 
    for (let row = 1; row <= n; row++) {
      //inside row loop to concatenate star
      let star = " ";
      for (let j = 1; j <= n; j++) {
        star += "*";
      }
      //after loop  we will have ***
      console.log(star);
    }
}
//return - undefined
let Squarestar = printSquareStar(3);
console.log(Squarestar)

console.log("pattern3");
//Triangle pattern

// Problem - 3 Given a value n - print the Triangle pattern
// *
// **
// ***
// approach
//i/p - 2 op- 1,2  stars
//i/p - 4 op- 1,2,3,4 stars
//Loop row to repeate task for n rows
//Loop column repeate task for n columns- condition< = row & concatenate

function righttrianglepattern(n) {
  //loop row n = row =3 
  for (let row = 1; row <= n; row++) {
    //inside row loop to concatenate star
    let star = " ";
    for (let j = 1; j <= row; j++) {
      star += "*";
    }
    //after the loop we will have star // to no. rows in each row
    console.log(star);
  }
}
// return- undefined
let Trianglestar = righttrianglepattern(3);
console.log(Trianglestar);


console.log("pattern4");
//mirror Triangle pattern

// Problem - 4 Given a value n - print the mirror Triangle pattern(space & star)
  //  *
// approach
//i/p - 2 op- 1,2  stars - n-1 space
//i/p - 4 op- 1,2,3,4 stars- 
//Loop row to repeate task for n rows - for each row for ith row 1)print n-1 space 2) print i star
//inside row Loop column repeate task for n columns- condition< = row & concatenate

function invertedtrianglepatternone(n) {
  //loop n= 4-> <3 space><1 space> row = 1 single row
  for (let row = 1; row <= 1; row++) {
    //inside row 1st loop to concatenate space
    let spacestar = " ";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    //inside row 2nd loop to concatenate star
    for (let col = 1; col <= row; col++) {
      spacestar += "*";
    } // at the end of loop will have 3 space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let InvertedTrianglestarone = invertedtrianglepatternone(4);
console.log(InvertedTrianglestarone);

//     *
//    **
//   ***
//  ****
console.log("pattern4a");
function invertedtrianglepattern(n) {
  //loop row n = row =3
  for (let row = 1; row <= n; row++) {
    // inside row 1st loop to concatenate space n- row
    let spacestar = " ";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    // inside row 2nd loop to concatenate stars star = row
    for (let col = 1; col <= row; col++) {
      spacestar += "*";
    } // at the end of loop will have 3space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let InvertedTrianglestar = invertedtrianglepattern(4);
console.log(InvertedTrianglestar);

console.log("pattern5");
//Problem - 5 Given a value n - print the  Triangle pattern(space & star)
//     *
//    ***
//   *****
//  *******
// *********
// approach
//i/p - 2 op- 1,3  stars - n-1 space
//i/p - 4 op- 1,3,5,7 stars- n-1 space
//Loop row to repeate task for n rows - for each row for ith row 1)print n-1 space 2) print 2*row -1 star
//inside row Loop column repeate task for n columns- condition< = 2*row -1  & concatenate
console.log("Triangle pattern")
function trianglepattern(n) {
  //loop row n = row =3
  for (let row = 1; row <= n; row++) {
    // inside row 1st loop to concatenate space n- row
    let spacestar = " ";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    // inside row 2nd loop to concatenate stars star = row
    for (let col = 1; col <= ((2*row)-1); col++) {
      spacestar += "*";
    } // at the end of loop will have 3space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let Triangle = trianglepattern(5);
console.log(Triangle);


console.log("pattern6");
//pattern 6 problem- Given a value n - print the  Triangle pattern(space & star) n =5
// *****
// ****
// ***
// **
// *

// 
// approach
// loop to repeate task for n rows- for each row
// inside row do Loop column repeate task for n columns  concatenate string of * stars n-row+1 times 
function pattern_6(n) {
  //loop each row
  // n=4,row = n row =1
  for (let row = 1; row <= n; row++) {
    //loop to concatenate n star in each row
    let star = " ";
    for (let col = 1; col <= n - row + 1; col++) {
      star += "*";
    }
    //after loop  we will have ****
    console.log(star);
  }
}

let pattern6 = pattern_6(5);
console.log(pattern6);


//pattern 7 problem- Given a value n - print the  Diamond pattern(space & star) n =3
//   *
//  ***
// *****
//  ***
//   *


console.log("Diamond pattern7")

function upperTriangle(n){
  for (let row=1; row <= n; row++){
    let star = " "
    for(space = 1; space <= n- row; space++){
      star += " ";
    }
    for(col = 1;col <= (2*row -1); col++){
      star +="*";
    }
    console.log(star)
  }

}

function lowerTriangle(n) {
  //lower triangl has n-1 row
  for (let row = 1; row <= n - 1; row++) {
    let star = " ";
    //in a row spaces = row
    for (space = 1; space <= row; space++) {
      star += " ";
    }
    for (col = 1; col <= ((2 * (n-row)) - 1); col++) {
      star += "*";
    }
    console.log(star);
  }

}

//combine the pattern
function Diamondpattern(n){
  upperTriangle(n);
  lowerTriangle(n);
}


let pattern7 = Diamondpattern(5);
console.log(pattern7);

//hour glass
function invertedDiamondpattern(n) {
  lowerTriangle(n);
  upperTriangle(n);
}

let pattern8 = invertedDiamondpattern(5);
console.log(pattern8);
