$(document).ready(function() {

	setInterval(function() {
		if (navigator.onLine) {
			$('section').html('There is a connection.');
		}
		else {
			$('section').html("There is NOT a connection.");
		}
	}, 500);

});