//constructor functions cap letter
const Airplane = function (name) {
    this.name = name;
}
Airplane.prototype.fly = function () {
    return "Whee"
}
const airplane = new Airplane("Skwisgar");

const Boat = function () {
    this.canFloat = true;
}

Boat.prototype.canFloat = function(){
    this.canFloat = true;
}

const boat = new Boat();

Airplane.prototype = Object.assign({}, Airplane.prototype, Boat.prototype)