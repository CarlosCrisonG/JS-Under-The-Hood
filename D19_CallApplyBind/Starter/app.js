var user = {
    firstname: 'Carlos',
    lastname: 'Crison',
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};
var logName = function(lang1, lang2, lang3) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2 + ' ' + lang3);
    console.log('-----------');
}

//CALL
//Ejecuta la función logName indicándole que la variable 'this' deberá hacer referencia a el objeto 'user',
//luego pasa los parámetros que tenga la función
logName.call(user, 'Spanish', 'English', 'Italian');

//APPLY
//Hace lo mismo que CALL con la única diferencia de que para que funcione los parámetros deben pasarse en array
logName.apply(user, ['Spanish', 'English', 'Italian']);

//BIND
//Hace lo mismo que CALL pero creando una copia de la función con la nueva información dada.
//Luego debe ser ejecutada esta copia.
var copyLogName = logName.bind(user, 'Spanish', 'English', 'Italian');
copyLogName();

// En BIND los parámetros de la función pueden pasarse luego, es decir al momento de ejecutar la copia.
var copyLogName2 = logName.bind(user);
copyLogName2('Spanish', 'English', 'Italian');

console.dir(copyLogName2);