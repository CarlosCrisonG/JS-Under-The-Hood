//Precedence
var a = 2 + 4 * 7;
console.log(a);

//Associativity
var b = 2 + 4 - 1;
console.log(b);

//Grouping changes precedence
var c = (a + b) * 2;
console.log(c);

//Precedence and Associativity Right to Left with equal operator
a = b = c;
console.log(a, b, c);