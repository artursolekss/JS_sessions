// let mainSectionElement = this.document.getElementById("mainSection");

// while (true) {
//     let userInput = prompt("Enter the text");
//     if (userInput === null)
//         break;
//     let elementPar = document.createElement("p");
//     // let paraText =
//     //     document.createTextNode(userInput);
//     elementPar.textContent = userInput;
//     // elementPar.appendChild(paraText);
//     mainSectionElement.appendChild(elementPar);
// }

function init() {
    this.counter = 0;
    let elementPar = document.createElement("p");
    let mainSectionElement = this.document.getElementById("mainSection");
    elementPar.textContent = "Random text";
    mainSectionElement.appendChild(elementPar);
    setTimeout(function() {
        alert("There are 5 seconds passed")
    }, 5000);
}

function showInfo() {
    alert("Here is the info");
}

function print(atr) {
    console.log(atr);
}