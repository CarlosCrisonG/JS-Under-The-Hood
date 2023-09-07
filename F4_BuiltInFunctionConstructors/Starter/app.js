function Person (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

const Carlos = new Person('Carlos', 'Crison');
const Jhon = new Person('Jhon', 'Doe');

console.log(Jhon);
console.log(Jhon.getFullName());