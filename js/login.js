$(document).ready( function () {
	$('form').submit( function () {
		var formdata = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "php/login.php",
			data: formdata,
		 });
		return false;
	});
});