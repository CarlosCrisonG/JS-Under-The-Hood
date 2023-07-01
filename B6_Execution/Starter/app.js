function a() {
    b();
    var c = 'This is C';
    console.log(c);
}

function b() {
    var d = 'This is D';
    console.log(d);
}

a();
var e = 'This is E';
console.log(e);