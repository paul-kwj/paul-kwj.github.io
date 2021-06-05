var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler(){
   console.log('jquery added :)');
}

$(document).ready(function() {
	var start = 0;
	$("#next").click(function(){
		$(".slide" + start).slideUp();
		$(".menu" + start).removeClass('current');
		$(".slide" + (start + 1)).slideDown();
		$(".menu" + (start + 1)).addClass('current');

		if (start === 2){
			$("#next").css('transform', 'rotate(180deg)');
		}

		if (start === 3){
			$(".slide3").slideUp();
			$(".menu3").removeClass('current');
			$(".slide0").slideDown();
			$(".menu0").addClass('current');
			$("#next").css('transform', 'rotate(0deg)');

			start = -1;
		}

		start += 1;
	});

	$(".menu0").click(function() {
		$(".slide" + start).slideUp();
		$(".menu" + start).removeClass('current');
		$(".menu0").addClass('current');
		$(".slide0").slideDown();

		start = 0;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu1").click(function() {
		$(".slide" + start).slideUp();
		$(".menu" + start).removeClass('current');
		$(".menu1").addClass('current');
		$(".slide1").slideDown();

		start = 1;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu2").click(function() {
		$(".slide" + start).slideUp();
		$(".menu" + start).removeClass('current');
		$(".menu2").addClass('current');
		$(".slide2").slideDown();

		start = 2;

		$("#next").css('transform', 'rotate(0deg)');
	});

	$(".menu3").click(function() {
		$(".slide" + start).slideUp();
		$(".menu" + start).removeClass('current');
		$(".menu3").addClass('current');
		$(".slide3").slideDown();

		start = 3;

		$("#next").css('transform', 'rotate(180deg)');
	});
});
