var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.full'),
    halfvh = vHeight/2,
    thirdvh = vHeight/3,
    halfvw = vWidth/2.5,
    quartvh = vHeight/4;
cover.css({"min-height":vHeight,"max-width":vWidth,});
$('.intro').css({"padding-top": vHeight*45/100,"min-height": vHeight*55/100, "max-width": vWidth});
$('.banner').css({"height": vHeight*70/100});
$('footer').css({"height": halfvh});

setTimeout(function () {
	$(".lwhite").removeClass("lwhite");
	$(".intro").css('background-color', '#fff')
}, 1100);
setTimeout(function () {
	$(".logo").addClass("lfade");
}, 2000);
setTimeout(function () {
	$("body").css('overflow', 'auto');
	$(".intro").addClass("hide");
}, 3500);
setTimeout(function () {
	$(".mainbod").removeClass("hide");
}, 3900);

function respnav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.nav').addClass("navsha");
    } else {
        $('.nav').removeClass("navsha");
    }
});

$(document).ready(function (){
    $("a.app").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.hom").click(function (){
        $('html, body').animate({
            scrollTop: $("#dis").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.fac").click(function (){
        $('html, body').animate({
            scrollTop: $("#fac").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.why").click(function (){
        $('html, body').animate({
            scrollTop: $("#why").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.cam").click(function (){
        $('html, body').animate({
            scrollTop: $("#cam").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("a.spec").click(function (){
        $('html, body').animate({
            scrollTop: $("#spec").offset().top
        }, 2000);
    });
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#home').position().top ){
        $(".nav").css('background-color', '#fff');
        $(".nav a").css('color', '#333');
    }
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban4').position().top ){
		$(".bod1:nth-of-type(2)").addClass("fadein");
    }  else {
		$(".bod1:nth-of-type(2)").removeClass("fadein");
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban1').position().top ){
        $(".nav").css('background-color', '#222');
        $(".nav a").css('color', '#fff');
		$(".bod2").addClass("fadein");
		$("#ban1").css('opacity', '.6');
    }  else {
		$(".bod2").removeClass("fadein");
		$("#ban1").css('opacity', '1');
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban2').position().top ){
        $(".nav a").css('color', '#fff');
		$(".bod3").addClass("fadein");
		$(".bod3").addClass("opaque");
		$("#ban2").css('opacity', '.6');
    } else {
		$(".bod3").removeClass("fadein");
		$("#ban2").css('opacity', '1');
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban3').position().top ){
        $(".nav a").css('color', '#fff');
		$(".bod1:nth-of-type(8)").addClass("fadein");
		$(".bod1:nth-of-type(8)").addClass("opaque");
		$("#ban3").css('opacity', '.6');
    } else {
		$(".bod1:nth-of-type(8)").removeClass("fadein");
		$("#ban3").css('opacity', '1');
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban5').position().top ){
        $(".nav a").css('color', '#fff');
		$(".bod1:nth-of-type(10)").addClass("fadein");
		$(".bod1:nth-of-type(10)").addClass("opaque");
		$("#ban5").css('opacity', '.6');
    } else {
		$(".bod1:nth-of-type(10)").removeClass("fadein");
		$("#ban5").css('opacity', '1');
	}
});
$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#ban6').position().top ){
        $(".nav a").css('color', '#fff');
		$(".bod1:nth-of-type(12)").addClass("fadein");
		$(".bod1:nth-of-type(12)").addClass("opaque");
		$("#ban6").css('opacity', '.6');
    } else {
		$(".bod1:nth-of-type(12)").removeClass("fadein");
		$("#ban6").css('opacity', '1');
	}
});

document.getElementById("btn1").onclick = function() {
	document.getElementById("modal1").style.display = "block";
};


function aniclo(){
	var btn = document.getElementById("close1");
	var mod = document.getElementById("modal1");
	$('.int1').addClass("goabove");
    setTimeout(function () {mod.style.display = "none"; }, 800);
	setTimeout(function () {$('.int1').removeClass("goabove"); }, 1000);
}

window.onclick = function(event) {
	var mod1 = document.getElementById("modal1");
    if (event.target == mod1) {
        aniclo();
    }
};