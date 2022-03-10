function init() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("resulttext").innerText = "Hello " + urlParams.get("name") + " " + urlParams.get("lastname");
}

$(document).ready(function() {
    $.getJSON("sp500.json", function(data) {
        console.log(data);
    });
})