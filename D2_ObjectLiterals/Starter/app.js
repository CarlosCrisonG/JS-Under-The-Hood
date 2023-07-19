var Carlos = {
    firstname: 'Carlos',
    lastname: 'Crison',
    address: {
        street: '111 Main St',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Carlos);

greet({
    firstname: 'Mary',
    lastname: 'Doe',
    address: {
        street: '333 Main St',
        city: 'Miami',
        state: 'FL'
    }
});

Carlos.address2 = {
    street: '444 Main St',
    city: 'Orlando',
    state: 'FL'
};

console.log(Carlos);