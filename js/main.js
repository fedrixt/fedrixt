$(document).ready(function () {
// loader
	setTimeout(function () {
		$("#loader-img img").fadeOut(3000)
	}, 0);
	setTimeout(function () {
		$("#loader-img").fadeOut(3000)
	}, 0);

// go-top button
	var goTopButton = function () {
		var goButtonShow = 500,
			fadeInTime = 400,
			fadeOutTime = 400,
			scrollSpeed = 400,
			goTop = $("#go-top");
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= goButtonShow) {
				goTop.fadeIn(fadeInTime);
			} else {
				goTop.fadeOut(fadeOutTime);
			}
		});
	};
	goTopButton();
});