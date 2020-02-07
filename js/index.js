$(document).ready(function() {

	setInterval(function() {
		if (navigator.onLine) {
			$('#locked').css("display","block");
			$('#unlocked').css("display","none");
		}
		else {
			$('#locked').css("display","none");
			$('#unlocked').css("display","block");
		}
	}, 100);

});