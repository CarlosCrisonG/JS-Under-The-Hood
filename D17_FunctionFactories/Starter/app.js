function makeGrettings (language) {
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
}

var greetEnglish = makeGrettings('en');
var greetSpanish = makeGrettings('es');

greetEnglish('Carlos', 'Crison');
greetSpanish('Carlos', 'Crison');