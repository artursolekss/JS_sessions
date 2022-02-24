// let numberOfFBs = parseInt(prompt("Please, enter the number of FizzBuzzs"));

// let sk = 0;
// let current = 1;
// while (sk < numberOfFBs) {
//     // if (current % 3 == 0 && current % 5 == 0)
//     if (current % 15 == 0) {
//         console.log(current);
//         sk++;
//     }
//     current++;//go to the next number

//

// let current = 0;
// for (let i = 0; i < numberOfFBs; i++) {
//     current += 15;
//     console.log(current);
// }
// let counter = 0; //counter - how many number printed already
// let current = 1; //the current number


// let previousStr;
// let previousNumber;
// while (counter < numberOfFBs) {

//     if (current % 15 == 0) {
//         console.log(current);
//         previousStr = "";
//         counter++;
//     } else if (current % 3 == 0) {
//         previousStr = "Fizz";
//         previousNumber = current;
//     } else if (current % 5 == 0) {
//         if (previousStr === "Fizz") {
//             console.log(previousNumber);
//             console.log(current);
//             previousStr = "";
//             previousNumber = 0;
//             cpunter += 2;
//         }
//     }
//     current++;

// }

// function getSum(a, b) {
//     return a + b;
// }

// console.log(getSum(3, 8));

// function getSum() {
//     return arguments[0] + arguments[1];
// }


// function showSum(a, b) {
//     console.log(a + b);
//     console.log(arguments[2]);
// }

// let myFunc = showSum;

// myFunc(4, 3);

// let showSum = function(a, b) {
//     console.log(a + b);
//     console.log(arguments[2]);
// }

// console.log(typeof showSum);
// showSum(3, 9);

// function makeCounter() {
//     let currentCount = 1;
//     return function() {
//         return currentCount++;
//     };
// }
// let counter = makeCounter();
// alert(counter()); // 1  
// alert(counter()); // 2  
// alert(counter()); // 3
// // another independent counter  
// let counter2 = makeCounter();
// alert(counter2()); // 1

// alert(makeCounter);

// let arr = [3, 2, -5];
// arr.sort((a, b) => a * a > b * b);

// console.log(arr.join());


// console.log(fact(5));

// function fact(n) {
//     if (n == 1)
//         return 1;
//     else
//         return n * fact(n - 1);
// }

// let str = "855454";
// console.log(str);

// let person = { name: "Arturs", lastName: "Olekss", printName: function() { console.log(this.name + this.lastName) } };
// console.log(person);

// person.printName();

// let doge = {};
// doge.sound = "wow";
// doge.glasses = true;
// console.log(doge);

// function person(name, lastName) {
//     let pers = {};
//     pers.name = name;
//     pers.lastName = lastName;
//     return pers;
// }

// let myPerson = person("First Name", "Last Name");
// console.log(myPerson);

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.equals = function(pers) {
        return this.name == pers.name && this.lastName == this.lastName;
    }
    this.toString = function() { return this.name + " " + this.lastName };
}


let myPerson = new Person("Arturs", "Olekss");
// console.log(myPerson);

// let persProtype = Object.getPrototypeOf(myPerson);
// console.log(persProtype);
// let pers2 = Object.create(persProtype);
// console.log(pers2);

let myPers2 = new Person("Arturs", "Olekss");

console.log(myPerson.equals(myPers2));

console.log(myPerson.toString());