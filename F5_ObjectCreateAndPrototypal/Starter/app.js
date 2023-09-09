var user = {
    firstname: 'Default',
    lastname: 'Default',
    Address: 'Default Address',
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    },
    greet: function () {
        return "Hi " + this.getFullName() + " nice to meet you !"
    }
}

var Cande = Object.create(user);
Cande.firstname = "Carlos Andrés";
Cande.lastname = "CG";

console.log(Cande);
console.log(Cande.greet());

var Beto = Object.create(user);
Beto.firstname = "Carlos Alberto";
Beto.lastname = "CG";
console.log(Beto.greet())