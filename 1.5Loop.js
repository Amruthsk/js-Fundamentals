//while loop
console.log("while loop")//entry control - checks condition until condition is false
let i = 1; //looping variable
//looping variable - used to control the loop

//condition - i <= 10
//inside the while block - console.log(i); i++ until condition is false
while(i <= 10){
    console.log(i);
    i ++;
}
console.log("Loop ended");

console.log("if")
// if condition - if i is less than or equal to 10 then print i - checks condition only once
let p = 1;
if(p <= 10){ 
    console.log("i is less than or equal to 10");
}   

// print -> sum

//problem - program to calculate sum of all number
//approach
//input - 10 output - 55
//n - parameter placeholder
//sum - variable to hold the sum
//sum = 0 - initial value
//loop from 1 to n - i = 1; i <= n; i++
//inside the loop - sum = sum + i
//return sum - return the sum


function sumFromONe(n){
    let sum = 0;
    let i = 1;
    while(i <= n){
        sum += i;
        i ++;
    }
    return sum;
}

const sumOfNum = sumFromONe(10);
console.log("sum of Number", sumOfNum);

// do while loop
//while loop
console.log("Do while loop")//exit control
let j = 1;
let z = 1000;
do{
    console.log(z);
    console.log(j);
    
    j++;

}while(j<=10);
console.log("Loop ended");

// for loop
console.log("for loop")
for(i=1;i<=10;i++){
    console.log(i);
}
console.log("Loop ended");

