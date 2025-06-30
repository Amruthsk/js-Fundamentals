//creation of object

var obj = {
  fname: "Jhon",
  lname: "Wick",
  dob: 12/4/1987,
  dob: 12/4/1987,

};

//date format not working

console.log(obj);

//penetrating
var obj = {}

obj.fname = 'jhon'
obj.lname = 'wick'

console.log(obj)

// //picking specific element
// console.log(obj.lname);

// using new keyword
var obj = new Object();

obj.fname = "jhon";
obj.lname = "rick";

console.log(obj);

//picking specific element
console.log(obj.lname);

let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("draw");
  },
};

//members - properties - hold value,
//members-  function-method- defines logic

//accessing object members
circle.draw();

// duplicate object to create object
// Factory function create a new circle return object
function createCircle(radius) {
  //Camel notation
  return {
    radius, //key and value same
    location: {
      x: 1,
      y: 2,
    },
    draw: function () {
      console.log("draw");
    },
  };
}

const cir1 = createCircle(3);
console.log(cir1);

// constructor function - naming different - first cap - pascal notation
//using this,new kw

function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this; // happens automatically when using new kw
}

//new kw
// 1)create empty object
// 2) set this to point to the object
// 3)return object
const another = new Circle(1); // this circle object
// this kw reference object . penetrate the object to set properties of the object

const a = Circle(1); // this window object dont define modiy golbal object

// cir1.constructor
// ƒ Object() { [native code] } // internal constructor to create objcet

// another.constructor
// ƒ Circle(radius){
//     console.log('this', this)
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//       }
//       return this; // happens automatically when usin…

// a.constructor
// ƒ Window() { [native code] }
