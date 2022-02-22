// // const arr = new Array();
// const arr = [];

// arr[0] = "This is the first element";
// arr[1] = "This is the second element";

// console.log(arr[0]);
// console.log(arr[1]);

// // arr = []; //this should trigger the error

// // let arrL = [5, 23, 98];
// // arrL[0] == 5;

// console.log("The array has " + arr.length + " elements");
// arr[arr.length] = "The last element";
// console.log(arr[arr.length - 1]);
// arr.push("Another last element");
// console.log(arr[arr.length - 1]);

// arr[15] = 3232;
// console.log(arr[10]);
// console.log(arr);

// const arr = [];
// while (true) {
//     let element = prompt("Enter the array element");
//     arr.push(element);
//     if (prompt("Enter X to stop").toLowerCase() === "x")
//         break;
// }

// console.log(arr);
// const sortedArr = arr.sort();
// console.log(sortedArr);
// console.log(arr);

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

// const arr = [212, "Str", true, { name: "Janis", lastName: "Johnson" }];
// console.log(arr.sort().reverse());
// console.log(arr.pop());
// console.log(arr.join());

// const arr1 = [3, 5, 7];
// const arr2 = [5, 3, 9];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1 + arr2);

// console.log(arr3.indexOf(5));

const arr = [];

arr["key1"] = "value1";
arr["key2"] = "value2";
arr["key0"] = "value0";

console.log(arr.key0)

let numberOfFizzBuzz = parseInt(prompt("Enter the number of FizzBuzzes"));