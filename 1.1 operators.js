

// arithmetic operator
let x =2;
let y =3;

console.log(x+y);

console.log(x - y);

console.log(x * y);

console.log(x / y); // gives u qoutient

console.log(x % y);// gives u reminder %-modolo

console.log(x ** y);



// assignment operator
let z =10;

//1

z += 5;
console.log(z);
z -= 5;
console.log(z);
z *= 4
console.log(z);
z /= 4;
console.log(z);
z %= 4;
console.log(z);


// logical operator
//And
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
//or
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//NOT
console.log(!true);
console.log(!false);

//shortcircuiting
console.log(10 && 30);//30
console.log(0 && 30);//0
console.log(10 && 0);//0
console.log(0 && 0);//0
console.log(40 && null);//null
console.log(40 && undefined);//undefined
console.log(40 && false);//false
console.log("" && -0);//""

// conditional rendering - react used
console.log(10 || 30);//10
console.log(0 || 30);//30
console.log(10 || 0);//10
console.log(0 || 0);//0
console.log(40 || null);//40
console.log(40 || undefined);//40
console.log(40 || false);//40
console.log("" || -0);//-0

// comparison operator
//abstract equality
console.log(10 == 10);
console.log('10' == 10);// true- converts to number
console.log(10 == 20);
console.log(10 != 20);      
console.log(10 != 10);
//strict equality
console.log('10' === 10); // false - no conversion 
console.log('10' !== 10); // true - no conversion
console.log('10' === '10'); // true - no conversion
console.log(10 === 20);
console.log(10 !== 20);
console.log(10 !== 10);
//relational operator
//greater than, less than, greater than or equal to, less than or equal to
console.log(10 > 20);
console.log(10 < 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 > 10);
console.log(10 < 10);   
console.log(10 >= 10);
console.log(10 <= 10);

console.log("bitwise operator");

console.log(5 & 6); // bitwise and

console.log(5 | 4); // bitwise or

console.log(5 ^ 6); //bitwise xor

console.log(1<<3); // left shift

console.log(1 << 4);// left shift

console.log(27>>2);// right shift

console.log(10 >> 1);// right shift


console.log("unary operator");
let a = 1;

console.log(a);

console.log(a++);

console.log(a);

let b = 1;

console.log(b);

console.log(++b);

console.log(b);

console.log('decrement')
let c = 1;

console.log(c);

console.log(c--);

console.log(c);

let d = 1;

console.log(d);

console.log(--d);

console.log(d);
