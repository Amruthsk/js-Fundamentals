// What are arrays
//array -ds that stores large number of data
//way - orientation - Linear contionus orientation in memory space
//ex: Images whenever there is large number of data saved in linear continous orientation there is a array

// // creation of arrays 
// var ar = [1,2,3,4,5,6] //best way
// console.log(ar);

// //using index

// var ar1 = [];
// ar1[0] ='A';
// ar1[1] = "B";
// ar1[2] = "c";
// ar1[3] = "d";
// ar1[4] = "3";

// console.log(ar1)

// //using new kw

// var ar2 = new Array(1,2,3,4,5,'debugger',)
// console.log(ar2);+


// opreation
var ar = [1,2,3,4,5,6,6]

console.log(ar);

// add element at the end of the array
ar.push(7);

console.log(ar);

// add element at the front of the array
ar.unshift(0);

console.log(ar);

// add element inbetween index 3: 3--->3:44

ar[3] = 44;

console.log(ar);

//remove element form rear end
ar.pop()

console.log(ar);

//remove element form front end
ar.shift()

console.log(ar);

// delete element and leave it empty

delete ar[3];

console.log(ar);


// delete element completely

ar.splice(3,1);

console.log(ar);

ar.splice(5, 1);

console.log(ar);


// important properties
//find length of the array we have
console.log(ar.length);

//sort an array
ar.unshift(10);
console.log(ar)

//sort method
ar.sort();
console.log(ar);

//reverse method
ar.reverse();
console.log(ar);

//slice - to fetcha part of a array indexed 2,3,4

ar.reverse();
console.log(ar);

//assignment is important
ar1 = ar.slice(2,4); //from second to the fourth(non inclusive)
console.log(ar1);

ar1 = ar.slice(2, 5);
console.log(ar1);

