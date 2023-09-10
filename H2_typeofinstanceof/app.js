var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

console.log('         ');
console.log('-- Object Array --');
var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

console.log('         ');
console.log('-- Instance of --');
function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log('         ');
console.log('-- Undefined and Null --');
console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

console.log('         ');
console.log('-- Functions --');
var z = function() { };
console.log(typeof z);

