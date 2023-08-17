function greet(word) {
    return function (name) {
        console.log(word + ' ' + name);
    }
}

var greeting = greet('Hi');
greeting('Carlos');