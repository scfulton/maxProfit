
a = "a"
b = "b"
p(a, b);
function p(x, y) {
    console.log(x + y)
}


const dog = {
    name: "Doggy",
    sound: "Woof",
    bark () {
        return this.sound
    },
    foo() {
        console.log(this.name)
    }
}
const cat = {
    name: "Kitty",
    sound: "death screech",
    meow () {
        return this.sound
    },
    foo2(){
        console.log(this.name)
    }
}
const n = cat.meow.bind(dog);
console.log( n() );


function test(n) { for (i = n; i>0; i--){Game.cookies++} }