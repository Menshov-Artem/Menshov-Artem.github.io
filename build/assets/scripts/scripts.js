$(window).on('load', function () {

	var $preloader = $('.preloader');
	var	$logotype = $preloader.find('.logotype');

	$logotype.delay(500).fadeOut(400);
	$preloader.delay(500).fadeOut(400);
	
	$('body').animate({scrollTop: 0});
	$('body').removeClass('scroll-disable');
	$(".header").addClass("animate-header")

});



$(document).ready(function(){

	// OWL Carousel
		$(".owl-carousel").owlCarousel({
			margin: 30,
			loop: true,
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 3
				}
			}
		});

});

//# sourceMappingURL=scripts.js.map