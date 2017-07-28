$(function() {

	// hamburgers
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		// Do something else, like open/close menu
	});
	//mmenu
	var $menu = $("#my-menu").mmenu({
		"extensions": [
		"pagedim-black",
		"theme-dark",
		"fx-menu-zoom",
		"listview-huge",
		"border-full"
		],
		"offCanvas": {
			"position": "right"
		}

	});

	var $icon = $("#mmenu-icon");

	var API = $menu.data( "mmenu" );


	$icon.on( "click", function() {

		API.open();

	});


	API.bind( "opened", function() {

		setTimeout(function() {

			$icon.addClass( "is-active" );

		}, 100);

		$icon.on( "click", function() {

			API.close();

		});

	});

	API.bind( "closed", function() {

		setTimeout(function() {

			$icon.removeClass( "is-active" );

		}, 100);

		$icon.on( "click", function() {

			API.open();

		});

	});

	$('.carousel-mountains').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselMountain()
		}, 100);
		
	});
	$('.carousel-mountains').owlCarousel({
		loop: true,
		// nav: true,
		nav: false,
		smartSpeed: 700,
		// navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items:2
			},
			1100: {
				items: 3
			}	
		}
	});

	$('.carousel-mountains-content').equalHeights();

	function carouselMountain() {
		$('.carousel-mountains-item').each(function() {
			var ths 	= $(this),
			thsh 	= ths.find('.carousel-mountains-content').outerHeight();
			ths.find('.carousel-mountains-image').css('min-height', thsh);		
		});
	}carouselMountain();

});