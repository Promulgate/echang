$(document).ready(function() {
	$('.works-btn').click(function() {
		$('.works').addClass('show');
	});
	$('.about-btn').click(function() {
		$('.about').addClass('show');
	})
	$('.close').click(function() {
		$('.works').removeClass('show');
		$('.about').removeClass('show');
	});
});