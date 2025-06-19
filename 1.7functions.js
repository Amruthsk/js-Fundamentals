//blackbox - i/p --(process)--o/p
//inbulid function

//console.log function- take i/p ---o/p on screen
console.log(10);// number ip
console.log("js is easy");//text ip

let age = 20;
console.log(age); //var ip

console.log( 12, "Start", age); //multi ip  same line op with comma separated value

//defining function/blackbox
function greetingToEveryone(){
    console.log("logic line 1....");
    console.log("logic line 2....");
    console.log("logic line 3....");
    console.log("logic line 4....");
}

//calling function
greetingToEveryone();
greetingToEveryone();
greetingToEveryone();
greetingToEveryone();

console.log(Math.sqrt(36))

// given a number, check if it is even or odd
//approach
//input - 6 output- even
//input - 7 output- odd
//n-parameter placeholder
//what is even or odd - if n%2 == 0 then even else odd
//check if n is even or odd


//n-parameter-placeholder
function isEvenOrOdd(n){
    if(n % 2 == 0) console.log('even');
    else console.log('odd');

}

isEvenOrOdd(6)  //6-actual values



// return vs print
function isEvenOdd(n) {
  if (n % 2 == 0) {
    return "even";

} else {
    return "odd";
}
}

const ans = isEvenOdd(6);
console.log(ans)


// consider  3 integer values,& find the minimum of the three

//approach
//input - 10, 20, 5 output- 5
//input - 10, 20, 30 output- 10
//we have 3 numbers a, b, c
//compare a, b, c all 3
//if a < b && a < c then a is minimum
//if b < a && b < c then b is minimum
//else c is minimum

function findMinimum(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

const min = findMinimum(10, 20, 5);
console.log("Minimum value is:", min);


//give 3 numbers a,b,c , check if we can form a triangle with them, the triangle having length a,b,c

//approach
//input - 3, 4, 5 output- true
//input - 1, 2, 3 output- false
//we have 3 numbers a, b, c
//to form a triangle, the sum of any two sides must be greater than the third side

function canFormTriangle(a, b, c) {
    if((a+b > c) && (a+c > b) && (b+c > a)) {
        return true; // can form a triangle
    }
    else {
        return false; // cannot form a triangle
    }
}

const canForm = canFormTriangle(3, 1, 5);
console.log("Can form a triangle:", canForm);

//given the 3 sides of a triangle, check if it forms a triangle check if the given triangle is equilateral, isosceles or scalene

//approach
//input - 3, 3, 3 output- equilateral
//input - 3, 4, 3 output- isosceles
//input - 3, 4, 5 output- scalene
function triangleType(a,b,c){
    if (canFormTriangle(a, b, c)) {
        // If the triangle can be formed, determine its type
        if (a ===b && b ===c){
            return "equilateral"; // all sides are equal
        }
        else if (a === b || b === c || a === c) {
            return "isosceles"; // two sides are equal
        } else {
            return "scalene"; // all sides are different
        }
}
}

const type = triangleType(3, 5, 5);
console.log("Triangle type is:", type);

//multiply
function multiply(a, b) {
  console.log(a * b);
}

multiply(12, 5);
