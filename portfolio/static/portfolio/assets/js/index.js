
$(document).ready(function(){

	$(".card").mouseenter( function(){
		$(this).children(".card-text").show(200);
	} ).mouseleave( function(){
		$(this).children(".card-text").hide(200);
	} );	


});

window.onload = function() {
	Particles.init({
		selector: '.background',
		color: '#ffffff',
		connectParticles: true,
		maxParticles: 150,



	});
};

