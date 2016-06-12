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



	

/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini // modified FK // setting height manual
     http://www.responsivewebmobile.com
	 Setting height 4times
******************************************************************************/
jQuery(document).ready(function() {
	$('.carousel').carousel({
    	pause: "false",
    	interval: 10000
	});

	$('.carousel').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()*1});
	$('.carousel .item').css({ 'width': '100%', 'height': $(window).outerHeight()*1});
	$('.carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
	});

	$(window).on('resize', function() {
		$('.carousel').css({'width': $(window).outerWidth(), 'height': $(window).outerHeight()*1});
		$('.carousel .item').css({ 'width': '100%', 'height': $(window).outerHeight()*1});
	});
}); 


/*******************************************************************************/
/*Magnific Popup*/
$('.lightbox').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true,
			titleSrc: 'rel'
		}		
	});	