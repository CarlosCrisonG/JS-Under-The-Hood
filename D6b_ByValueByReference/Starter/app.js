//by value
var a = 5;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

//by reference

var c = {
    greetings: 'Hi'
}

var d;

d = c;

console.log(c);
console.log(d);

c.greetings = 'Hello'

console.log(c);
console.log(d);

d = {
    greetings: 'Hola'
}

console.log(c);
console.log(d);