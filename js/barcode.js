
$(document).ready(function(){
    $("#header").scroll(function(){
    
    $("#barcodeContainer").addClass("active");    

    $("#barcode1, #barcode2, #barcode3, #barcode4").animate({
        opacity: '0.5',
        width: '100px',
        left: '-300px',
        top: '200px'
    },"slow");
    $("#illustration").animate({
        opacity: '1.0',
        width: '200px',
        left: '-320px',
        top: '200px'
    },"slow");
    $("#illustration").text("ILLUSTRATION").addClass("barCH").prepend("<div class='divbox'></div>");


    $("#barcode5, #barcode6, #barcode7, #barcode8").animate({
        opacity: '0.5',
        width: '100px',
        left: '-200px',
        top: '200px'
    },"slow");
    $("#projects").animate({
        opacity: '1.0',
        width: '200px',
        left: '-110px',
        top: '200px'
    },"slow");
    $("#projects").text("PROJECTS").addClass("barCH").prepend("<div class='divbox'></div>");

    $("#barcode9, #barcode10, #barcode11, #barcode12").animate({
        opacity: '0.5',
        width: '100px',
        left: '-50px',
        top: '200px'
    },"slow");
    $("#about").animate({
        opacity: '1.0',
        width: '200px',
        left: '100px',
        top: '200px'
    },"slow");
    $("#about").text("ABOUT").addClass("barCH").prepend('<img src="images/about_splash.jpg" height="auto" width="200px"/>');

    $("#barcode13, #barcode14, #barcode15, #barcode16").animate({
        opacity: '0.5',
        width: '100px',
        left: '100px',
        top: '200px'
    },"slow");
    $("#resume").animate({
        opacity: '1.0',
        width: '200px',
        left: '310px',
        top: '200px'
    },"slow");
    $("#resume").text("RESUME").addClass("barCH").prepend("<div class='divbox'></div>");

    $("#barcode17, #barcode18, #barcode19, #barcode20").animate({
        opacity: '0.5',
        width: '100px',
        left: '250px',
        top: '200px'
    },"slow");
    $("#contact").animate({
        opacity: '1.0',
        width: '200px',
        left: '520px',
        top: '200px'
    },"slow");
    $("#contact").text("CONTACT").addClass("barCH").prepend("<div class='divbox'></div>");

    $("#nameSplash").animate({
        opacity: '1.0',
        height: '100px',
        width: '400px',
        left: '0px',
        top: '-240px'
    },"slow");
$(function () {
    $("#header").click(function(){alert('header');});
    $("#header").off('click');

});
    $(".barC1").wrapAll("#illustration");
    $(".barC2").wrapAll("#projects");
    $(".barC3").wrapAll("#about");
    $(".barC4").wrapAll("#resume");
    $(".barC5").wrapAll("#contact");

});


});



