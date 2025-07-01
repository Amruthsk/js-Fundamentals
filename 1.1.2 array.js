// What are arrays
//array -ds that stores large number of data
//way - orientation - Linear contionus orientation in memory space
//ex: Images whenever there is large number of data saved in linear continous orientation (3d array) there is a array

//arrays store hetrogenous value -different data type

// creation of arrays 
let ar = [1,2,3,4,5,6,false,"abc",true,null] //best way
console.log(ar);

//array - using index - access & updation of  value  possible - mutable - update
//strings - access - cant update value - immutable hence dont updat

// Index - positioning-unique mapping of characters of string to a unique no./position/unique mapping
//q-start-0 , end - length - 1;
//a-var[]; access & extract & update

let ar1 = [];// empty array
ar1[0] ='A';
ar1[1] = "B";
ar1[2] = "c";
ar1[3] = "d";
ar1[4] = "3";

console.log(ar1)

// using new kw

let ar2 = new Array(1,2,3,4,5,'debugger',)
console.log(ar2);

console.log(typeof ar2);


// opreation
let ar3 = [1,2,3,4,5,6,6]

console.log(ar3);

// add element at the end of the array
ar3.push(7);

console.log(ar3);

// add element at the front of the array
ar3.unshift(0);

console.log(ar3);

// add element inbetween index 3: 3--->3:44

ar3[3] = 44;

console.log(ar3);

//remove element form rear end
ar3.pop()

console.log(ar3);

//remove element form front end
ar3.shift()

console.log(ar3);

// delete element and leave it empty

delete ar3[3];

console.log(ar3);


// delete element completely

ar3.splice(3,1);

console.log(ar3);

ar3.splice(5, 1);

console.log(ar3);


// important properties
//find length of the array we have
console.log(ar3.length);

//sort an array
ar3.unshift(10);
console.log(ar3)

//sort method
ar3.sort();
console.log(ar3);

//reverse method
ar3.reverse();
console.log(ar3);

//slice - to fetcha part of a array indexed 2,3,4

ar3.reverse();
console.log(ar3);

//assignment is important
ar5 = ar3.slice(2,4); //from second to the fourth(non inclusive)
console.log(ar5);

ar6 = ar3.slice(2, 5);
console.log(ar6);


console.log("for of loop for arrays");

let array = [1,3,4,6,9,12,81]; // can acess value directly without tracking index,length

for (let value of array){
    console.log(value);
}



let name = "VIKRAM" // can acess value directly without tracking index,length

for (let char of name) {
  console.log(char);
}

//q- length
console.log("length of string: ",name.length);

//a -iterate all char through index
for(let idx= 0; idx <=((name.length) - 1); idx++){
  console.log("index with char : ",idx, name[idx])
}

//problem - check for palindrome for number

//approach
// numbers cannot be accessed as string individualy  -it cannot be transversed using indexes-  dont possess the access through indexes therefore- convert
//check directly the given no. by comparing each end -if else
//comparing process repeated for all the given numbers- loop

function checkPalindrome(n){
  //converting number to string
  let str = ""+n;
  let i = 0;
  let j = (str.length)-1;
  while(i<=j){
    if(str[i]==str[j]){
      i++;//move from s-> e
      j--;//move from e -> s
    }
    //condition failed not palindrome
    else{return false;}
  }
  //loop completed palindrome
  return true;
}

let num = checkPalindrome(1591);
console.log(num);