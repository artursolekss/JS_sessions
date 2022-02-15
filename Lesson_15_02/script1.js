let a = 1;
let b = 2121.3232;
// let bigInt = 22222222222222222222222222222222n;
let specialNumber = 5E-1;
console.log(specialNumber);
a = 0.2;
b = 0.1;
console.log((a + b) - 0.3 < Number.EPSILON);
let myNumber = Number("6434343");
myNumber = parseInt("743434343");
myNumber = Number("434343,3232".replace(",", "."));
myNumber = Number("884343ffdsfsdfds");
console.log(myNumber);

a = 0;
b = 0;
let result = a / b;
console.log(result);

// 0.1 + 0.2 - 0.3 == 0

// 34323 = 3 * 10^0 + 2 * 10^1 + 3 * 10 ^3 
//         + 4 * 10^4 + 3 * 10^5

/// 10 = 0 * 8^0 + 1 * 8^1 = 8


let answer = true;
console.log(typeof(answer));

let str = "Here is the first line\nHere is the second line\t here is the tab";

console.log(str);

let v1 = 5;
let v2 = 10;
console.log(`Fifteen is ${v1 + v2} and
not ${2 * v1 + v2}.`);
console.log('Fifteen is ' + (v1 + v2) + ' and not ' + (2 * v1 + v2) + '.');

a = b = 4;
console.log(a);
console.log(b);
a += 6; //a = a + 6;
console.log(a);

a *= 6; //a = a * 6;
console.log(a);

a /= 6; //a = a / 6;
console.log(a);

// 3 + 4 = 7 - works as addition
// "string1" + "string2" = "string1string2" //works as the concatenation
a = "MyString";
a += "Val";
console.log(a);

a *= "Val";
console.log(a);

result = (a === b);
console.log(result);

a = 1;
b = 2;

console.log("First part " + a + b + " last part");
console.log("First part " + (a + b) + " last part");

// 2 + 2 * 2 = 2 + 4 = 6;
// (2+2) * 2 = 4 * 2 = 8;

let cond1 = true;
let cond2 = false;
let cond3 = true,
    cond4 = false;

result = !(cond1 == cond2 && cond3 == cond4);
console.log(result);

result = (cond1 == cond2 && cond3 == cond4) == false;
console.log(result);

a = 4;
a++; // a = a + 1 or a += 1;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(--a);
console.log(a ** 2);

a = "Str";
// a++;
a = a + 1;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(--a);
console.log(a ** 2);

a = 12 % 5; // 12 = 5 * 2 + 2
console.log(a);

a = 3;
console.log(a % 2);

a = 72;
console.log(a % 2);

a = (1 + 1) % 2;

// true && true => true
// true && false => false
// false && false => false;

// true || true => true
// true || false => true;
// false || false => false;

v1 = 24;
v2 = 27;
v3 = 13;
v4 = 16;
result = (v1 < 30 && v1 > 26) || (v3 == 13 || v4 > 20);
//(true && false) || (true || false);
console.log(result);
/// if(age >= 18 || agreement == true)

//SELECT * FROM table_name WHERE (name = 'Janis' AND lastName = 'Kalnins') OR (id = '12') <--- SQL
//if( (name == "Janis" && lastName == "Kalnins") || id  == '12')