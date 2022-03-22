const squared = (x) => x * x;

const myFunct = () => {
    console.log(this);
}


function toSquare() {
    console.log(this);
    document.getElementById("result").innerText = squared(document.getElementById("value").value);
    myFunct();
}

const toSquare2 = () => {
    console.log(this);
}

class Animal {

    static domain;

    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    static {
        Animal.domain = "Eukaryota";
    }

    makeSound() {
        console.log(this.name + " is making the sound");
    }

    static sayHello() {
        alert("Hello");
    }

}

class Dog extends Animal {

    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
        this._myproperty = "";
    }

    get description() {
        return "My name is " + this.name + ", I am " + this.breed;
    }

    set myproperty(prop) {
        this._myproperty = prop + "(added from setter)";
    }

    makeSound() {
        console.log(this.name + " is barking");
    }

}


// class myTestClass {

//     static {
//         alert("Static constructor executed");
//     }

//     static myTestMethod() {

//     }

// }

function onInit() {
    // let dog = new Animal("Jacky", 3);
    // console.log(dog);
    // dog.makeSound();
    // Animal.sayHello();

    // document.getElementById("mybtn1").addEventListener("click", toSquare);
    // document.getElementById("mybtn2").addEventListener("click", toSquare2);
    // // Animal.makeSound(); <-- this triggers the error
    // // dog.sayHello();  <--this triggers the error
    // console.log("The domain of the Animals is : " + Animal.domain);

    let dog = new Dog("Jacky", 3, "Austrian Pinscher");
    // try {
    dog.makeSound();
    console.log(dog.description);
    dog.myproperty = "Here is my proeprty";
    dog.execute();
    dog.makeSound();
    // } catch (err) {
    //     console.log(err.message);
    // }

    dog.description = 43434;
    console.log(dog);

}


function getResult() {

    try {
        const number1 = parseFloat(document.getElementById("num1").value);
        const number2 = parseFloat(document.getElementById("num2").value);
        const result = number1 / number2;

        checkInputNumber(number1, number2);

        document.getElementById("result").innerText = result;
    } catch (err) {
        document.getElementById("result").innerText = err;
    } finally {
        console.log("Finnaly executed");
    }

}

function checkInputNumber(num1, num2) {

    // try {
    if (num1 > 1000)
        throw "Number 1 is out of range";

    if (num2 > 1000)
        throw "Number 2 is out of range";

    if (num2 === 0)
        throw "Division by 0 not possible";
    // } catch (err) {
    //     throw err;
    // }
}