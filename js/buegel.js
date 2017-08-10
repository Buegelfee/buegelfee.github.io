// JavaScript Document

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

/****************************************************************************/
// Mobile Navigation durch Klick schließen
$(".navbar-collapse ul li a").click(function () {
	$('.navbar-collapse').collapse('hide');
});

$('body').scrollspy({
	target: ".navbar"
});

/******************************************************************************/
//Anchor-scrolling with nav-offset
$(document).ready(function(){
$('a[href^=#]').on('click', function(e){
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(href).offset().top
    },'slow');
    e.preventDefault();
});
});