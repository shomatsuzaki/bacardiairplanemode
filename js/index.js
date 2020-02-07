$(document).ready(function() {

	setInterval(function() {
		if (navigator.online) {
			$('section').html('There is a connection.');
		}
		else {
			$('section').html("There is NOT a connection.");
		}
		console.log('testing...');
	}, 1000);

});