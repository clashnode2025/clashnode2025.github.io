(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();


	var tinyslider = function() {


		var el = document.querySelectorAll('.testimonial-slider');
		


		if ( el.length > 0 ) {
			var tnsSlider = tns({
				container: '#testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 10,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#testimonial-nav',
				responsive: {
					0: {
						items: 1
					},
					700: {
						items: 2
					},
					1000: {
						items: 3
					}
				}
			});
		}

	}
	tinyslider();



})()