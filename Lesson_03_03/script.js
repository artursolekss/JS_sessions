// let oM = document.getElementById("myHeader1");
// oM.hide(); //"method not found!"


//The code will not work, since the document is not loaded yet
// let oM = $("#myHeader1");
// oM.hide();
// $(document).ready(function() { //the function passed to ready() will be executed after the document is loaded
//     let oM = $("#myHeader1");
//     oM.hide(); //OK, because all jQuery
//     //objects have .hide() method
// });

$(mySpecialFunction);
$(setHandlers);

function myFunction() {
    alert("Here is the code from myFunction");
}

function mySpecialFunction() {
    let oM = $("#myHeader1");
    oM.hide(); //OK, because all jQuery
}

function setHandlers() {

    $(document.body).on("click", "#mySpecialButton", function() {
        $(":text").val("This is the default text");
        console.log(this); ///this - the source element, which has triggered the event
    });

    // $("#startCat").on("click", function() {
    //     let counter = 0;
    //     for (let i = 0; i < 500; i += 10) {
    //         setTimeout(function() {
    //             $("#cat").css("margin-left", i + "px")
    //         }, (++i * 100));
    //     }
    // })
    $("#startCat").on("click", function() {
        $("#cat").animate({
            "border-width": "165px",
            "padding": "130px"
        }, 300);
    });

    $("#endCat").on("click", function() {
        $("#cat").animate({
            "border-width": "0px",
            "padding": "0px"
        }, 300);
    });

}