console.log("Hello World")
console.error("Hello World"); console.warn("Hello World")

// alert("Hello")

let t = 5;
console.log(t)

// let t = "hello";

const y = 8;
// y = 5;

let name = "hrishabh"
let surname = "joshi"
let pop

console.log(name + " " + surname);

console.log(`Hello ${name}`);

console.log(typeof name);
console.log(typeof pop);

pop = true

console.log(typeof pop)

let Dogs = ["tom", "jerry", ["har", "pop"]]
// let Cats = []



Dogs.push("Jam");
Dogs.unshift("Dojo");
Dogs.pop();
console.log(Dogs.indexOf("jerry"));
console.log(Dogs)

Dogs[1] = "kom"


let Cats = {
    name: "catty",
    color: "golden"
}

console.log(Cats)
console.log(Cats.name)

let tortoise = [
    {
        name: "dojo",
        speed: "really slow"
    },
    {
        name: "mojo",
        speed: "really really slow"
    },
    {
        name: "torty",
        speed: "slow"
    }
]

let k = JSON.stringify(tortoise);
console.log(k);

// for (let x = 0; x < tortoise.length; x++) {
//     console.log(tortoise[x].name)
// }

// let x = 0
// while (x < tortoise.length) {
//     console.log(tortoise[x].name);
//     x++;
// }

tortoise.forEach(function (x) {
    console.log(x.speed);
})

for (let x of tortoise) {
    console.log(x.name);
}

let a = "20";

if (a === 20) {
    console.log("Yes")
}
else {
    console.log("No");
}

let pepper = document.getElementById("pepper")
console.log(pepper)
// pepper.innerHTML = "Hello World";
// pepper.style.backgroundColor = "yellow"


let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    // console.log(e.target);
    e.preventDefault();
    pepper.innerHTML = "Hello World";
    pepper.classList.add("rop");
})





