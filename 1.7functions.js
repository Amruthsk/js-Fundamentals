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

//n-parameter-placeholder
function isEvenOrOdd(n){
    if(n % 2 == 0) console.log('even');
    else console.log('odd');

}

isEvenOrOdd(6)  //6-actual values

function multiply(a,b){
    console.log(a*b);
}

multiply(12,5);


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