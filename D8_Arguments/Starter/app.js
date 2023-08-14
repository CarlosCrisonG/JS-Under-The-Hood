function greet (firstname, lastname, language, ...other) {
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(other);
    console.log(arguments);
    console.log('-----------');
}

greet();
greet('Carlos');
greet('Carlos', 'Crison');
greet('Carlos', 'Crison', 'Spanish', 0, '1', 'Last');