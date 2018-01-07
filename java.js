$(document).ready(function() {
	$(".burgermenu").click(function() {
		if ($(".burgermenu").hasClass("burgermenu_active")) {
  			$(".burgermenu").removeClass("burgermenu_active");
  			$("#nav").css('height', '0');
		}else{
			$(".burgermenu").addClass("burgermenu_active");
			$("#nav").css('height', '100%');
		}
	});
});


