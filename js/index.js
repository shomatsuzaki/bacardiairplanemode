$(document).ready(function() {

	setTimeout(function() {
		if (navigator.online) {
			$('section').html('There is a connection.');
		}
		else {
			$('section').html("There is NOT a connection.");
		}
	}, 1000);

});