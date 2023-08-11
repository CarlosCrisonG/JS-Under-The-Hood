console.log(this);

function a() {
    console.log(this);
}

var b = function () {
    console.log(this);
}

a();
b();

var c = {
    name: "Carlos",
    log: function () {
        var self = this;

        console.log(self);


        function setname (newname) {
            self.name = newname;
        }
        setname("New Carlos");
        console.log(self);

    }
}

c.log();