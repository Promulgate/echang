$(document).ready(function() {
	$('.about-btn').click(function() {
		$('.about').addClass('show');
	})
	$('.works-btn').click(function() {
		$('.works').addClass('show');
	});
	$('.resume-btn').click(function() {
		$('.resume').addClass('show');
	})
	$('.close').click(function() {
		$('.works').removeClass('show');
		$('.about').removeClass('show');
		$('.resume').removeClass('show');
	});
});
