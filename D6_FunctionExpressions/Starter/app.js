greet();

function greet() {
    console.log("hi");
}

var anonymousGreet = {};

anonymousGreet.orden = function() {
    console.log("hi");
}

// anonymousGreet();
anonymousGreet.test = "This is a test";
console.log(anonymousGreet);

function log(a) {
    // console.log(a);
    a();
}

log(function () {
    console.log("hi");
}

);