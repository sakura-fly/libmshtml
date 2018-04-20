$(document).ready(function() {
    $("#qk").click(function(event) {
    	$("#ucontent").load("qikanadmin.html");
    });
    $("#books").click(function (e) {
        $("#ucontent").load("bookman.html");
    })
});