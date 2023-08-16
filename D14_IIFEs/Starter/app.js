//NORMAL FUNCTIONS
//Example of Normal Function Statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Carlos');

//Example of Normal Function Expression
var greeting = function (name) {
    console.log('Hello ' + name);
}
greeting('Carlos');

//IMMEDIATLY INVOKED FUNCTIONS EXPRESSIONS (IIFE)
//It should be always a Function Expression, it means inside a variable.
//Example 1
var greetIIFE = function (name) {
    console.log('Hello IIFE');    
}();

//Example 2
var greetIIFE2 = function (name) {
    console.log('Hello ' + name);    
}('IIFE 2');

//Example 3
var greetIIFE3 = function (firstname, lastname, age) {
    console.log('Hello ' + firstname + ' ' + lastname + '. Your age is ' + age + ' years old.');    
}('Carlos', 'Crison', 36);

//WRAPPED IIFE
//This way we can call an anonymous function on the fly, by wrapping it into ();
//Example 1
(function (number) {
    console.log('The number is ' + number);    
}(3));

//Example 2
//The executing parentheses (), can be inside or outside of the wrapping parentheses.
(function (number) {
    console.log('The number is ' + number);    
})(4);

//NOTE
//Both ways (inside or outside) are ok. However, as my personal opinion, inside the parentheses looks more logic.
//Like this:
(function (number) {
    console.log('For me this is the proper way: ');
    console.log('The number is ' + number);
}(5));
