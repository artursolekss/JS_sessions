const MY_TOP_CONSTANT = 243;
const YEAR = 2022;

// console.log("Here is the information provided to console"); ///here is the comment
// console.error("Here is the error in console");
// console.warn('This is the warning message');
// console.clear();
var a;
let b = 42;
a = b;
a = "Here is the string";
c = 32;
var c;

var myText = "Here is the text 1";

{
    var myText = "Here is the text 2";
}
// console.log(myText);

let myTextL = "Here is the text 1";

let myVar = "12121"; {
    console.log(myVar);
    myVar = "error";
    console.log(myVar);
    console.log(this.myTextL);
    let myTextL = "Here is the text 2";
    console.log(myTextL);
}
console.log(myTextL);

const CVAR = "My const var";
console.log(CVAR);
// CVAR = "4343";

// const CVAR2;

// CVAR2 = "32";
// console.log(CVAR2);
console.log("This is :");
console.log(this);


let myObj = {
    myFunction: function() {
        console.log("This is :");
        console.log(this);
    }
}

myObj.myFunction();