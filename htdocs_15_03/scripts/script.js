$(document).ready(function() {
    $.getJSON("data/sp500.json", function(data) {
        for (let i = 0; i < data.length; i++) {
            $("#prices").append("<p>Date: " + data[i].Date + ", Price: " + data[i].Close + "</p>")
        }
    });
})