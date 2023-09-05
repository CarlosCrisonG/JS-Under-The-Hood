function Person(firstname, lastname) {
 
    // console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    // console.log('This function is invoked.');
    
}

var john = new Person('John', 'Doe');
// console.log(john);

var jane = new Person('Jane', 'Doe');
// console.log(jane);

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

console.log(jane.getFullName());

var carlos = new Person('Carlos', 'Crison');

console.log(carlos.getFullName());

console.log(Person.prototype);

Person.prototype.getFormalFullName = function () {
    return 'Sr ' + this.lastname + ', ' + this.firstname;
}

console.log(Person.prototype);

console.log(carlos.getFormalFullName());