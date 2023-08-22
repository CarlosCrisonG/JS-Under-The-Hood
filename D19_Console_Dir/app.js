//Archivo creado para mostrar que las funciones son objetos y que pueden verse en la consola como cualquier objeto.


function greeting(name, language) {
    return console.log('Hi ' + name + ', your language was set to ' + language);
}

greeting('Carlos', 'Spanish');

//CONSOLE.DIR me permite ver en la console una función como si fuera un objeto, con todos sus argumentos y métodos.
console.dir(greeting);