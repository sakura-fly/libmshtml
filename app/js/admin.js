$(document).ready(function() {
    $("#qk").click(function(event) {
    	$("#ucontent").load("bookman.html");
    });
    $("#books").click(function (e) {
        $("#ucontent").load("userman.html");
    })
});