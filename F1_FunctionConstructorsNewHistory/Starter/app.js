function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Function Invoked !');
}

var jane = new Person('Jane', 'Doe');
console.log(jane);

var jhon = new Person('Jhon', 'Doe');
console.log(jhon);