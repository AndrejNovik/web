$(document).ready(function() {
	$('.menu__cross').click(function(event) {
		$('#menu').removeClass('active');
		$('#menu').toggleClass('lock');
	});
	$('.calculator__link').click(function(event) {
		$('#menu').removeClass('lock');
		$('#menu').toggleClass('active');

	});
});



