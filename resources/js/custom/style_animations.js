$(function() {
	//Hover style animations
	$('.circle-part').on('mouseover', function() {
		$(this).addClass('hover');
	});
	
	$('.circle-part').on('mouseout', function() {
		$(this).removeClass('hover');
	});
	//End of Hover style animations
	
	
	
	//Click style animations
	$('.circle-part').on('mousedown', function() {
		$(this).addClass('active');
	});
	
	$('.circle-part').on('mouseup', function() {
		$(this).removeClass('active');
	});
	//End of Click style animations
});