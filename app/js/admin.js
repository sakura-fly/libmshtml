$(document).ready(function() {

    $("#qk").click(function(event) {
    	$("#ucontent").load("qikanadmin.html");
    });
    $("#books").click(function (e) {
        $("#ucontent").load("bookman.html");
    })
    $("#user").click(function (e) {
        $("#ucontent").load("userman.html");
    })
    $("#qkfx").click(function (e) {
        $("#ucontent").load("qkfx.html");
    })
    $("#qk").click();

});