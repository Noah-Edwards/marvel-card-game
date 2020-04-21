$(document).ready(function(){
	$(".preloader").click(function(){
		$('.preloader').addClass('active');
	});
	$('.menuToggle').click(function(){
		$('ul').toggleClass('active');
	})
});