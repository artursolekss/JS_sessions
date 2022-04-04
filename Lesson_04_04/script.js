// let person1 = {
//     name: "Jack",
//     lastname: "Sparrow",
//     compareTo: function(pers) {
//         return this.name === pers.name && this.lastname === pers.lastname ? true : false;
//     },
//     copyMe: function() {
//         return { name: this.name, lastname: this.lastname }
//     }
// };
// let person2 = { name: "Jack", lastname: "Sparrow" };
// console.log(person1.compareTo(person2));

// // function person(first_name, last_name) {
// //     this.first_name = first_name;
// //     this.last_name = last_name;
// // }

// // class Person {
// //     constructor(first_name, last_name) {
// //         this.first_name = first_name;
// //         this.last_name = last_name;
// //     }
// // }
// // //creating new instances of person object
// // let personC1 = new Person('Mukul', 'Latiyan');
// // let personC2 = new Person('Rahul', 'Avasthi');

// const coder = {
//     isStudying: false,
//     printIntroduction: function() {
//         console.log(`My name is ${this.name}. Am I
//           studying?: ${this.isStudying}.`)
//     }
// }
// const me = Object.create(coder);
// console.log(me);

// // "name" is a property set on "me", but not on "coder"
// me.name = 'Mukul';

// // Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();

// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails() {
//         return (`The name of the bike is ${this.name}.`)
//     }
// }

// class Vehicle2 {
//     constructor(name, maker, engine) {
//             this.name = name;
//             this.maker = maker;
//             this.engine = engine;
//             this.getDetails = function() {
//                 return (`The name of the bike is ${this.name}.`)
//             }
//         }
//         // getDetails() {
//         //     return (`The name of the bike is ${this.name}.`)
//         // }
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle2('Ninja', 'Kawasaki', '998cc');

// console.log(Vehicle);
// console.log(bike1);
// console.log(bike2);

// class person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add) {
//         this.add = add; ////  "   fdfdfdfd"
//     }
//     getDetails() {
//         console.log(`Name is ${this.name},Address is: ${this.add}`);
//     }
// }
// let personE = new person('Mukul', 21);
// personE.add_Address('Delhi');
// personE.getDetails();

// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function() {
//         return (`First name is: ${firstname} Last
// 			name is: ${lastname}`);
//     }
//     this.getDetails_access = function() {
//         return getDetails_noaccess();
//         // return (`First name is: ${firstname}, Last
//         // 	name is: ${lastname}`);
//     }

//     this.getFirstName = function() {
//         return firstname;
//     }

//     this.setFirstName = function(name) {
//         firstname = name.trim();
//         const newString = firstname.charAt(0).toUpperCase() + firstname.substring(1);
//         firstname = newString;
//     }
// }
// let person1 = new person("Janis", "Liepins");
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

//Inheritance example
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    toString() {
        return (`Name of person: ${this.name}, Last Name: ${this.lastname}`);
    }
}
class Student extends Person {
    constructor(name, lastname, id) {
        //super keyword to for calling above class constructor
        super(name, lastname);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}

class Employee extends Person {
    constructor(name, lastname, salary) {
        //super keyword to for calling above class constructor
        super(name, lastname);
        this.salary = salary;
    }
    toString() {
        return (`${super.toString()},Salary: ${this.salary}`);
    }
}

let student1 = new Student('Mukul', "LastTest", 22);
console.log(student1.toString());

class Animal {
    static biologicalKingdom = "Animalia";

    static {
        console.log("Here is the static contructor called");
    }

    constructor() {
        this.age = 0;
        console.log("Here is the animal constructor called");
    }

    static move = () => {
        console.log("The animal is moving");
    }
}

class Dog extends Animal {}

console.log(Animal.biologicalKingdom);
let dog = new Dog();

Animal.move();
console.log(Animal.biologicalKingdom);