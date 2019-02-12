gameControl = {speed:1000, score:0, currentSequence:[], playerSequence:[], message:''};

$(function() {
	circleParts = $('.circle-part');

	//Some testes to enlight random parts
	addPartRunSequence();
	
	$('.circle-part').on('mousedown', function() {
		gameControl.playerSequence.push($(this)[0]);
		
		if ($(gameControl.currentSequence[gameControl.playerSequence.length - 1]).attr('id') != $(this).attr('id')) {
			gameControl.message = "Wrong";
			$('#screen_block').show();
		} else if (gameControl.currentSequence[gameControl.playerSequence.length] == null) {
			gameControl.message = "Right";
			gameControl.score += 110;
			addPartRunSequence();
		} else {
			gameControl.score += 10;
		}
		
		updateGameStatus();
	});
});

function addPartRunSequence() {
	var part = circleParts[ Math.floor(Math.random()*4) ];
	var i = 0;
	
	$('#screen_block').show();
	
	gameControl.currentSequence.push(part);
	
	var runningSequence = setInterval(function() {
		$(gameControl.currentSequence[i]).addClass('hover')
		
		setTimeout(function() {
			$('.circle-part').removeClass('hover')
		}, gameControl.speed/2);
		
		i++;
		
		if (gameControl.currentSequence[i] == undefined) {
			$('#screen_block').hide();
			gameControl.playerSequence = [];
			clearInterval(runningSequence);
		}
	}, gameControl.speed);
}

function updateGameStatus() {
	$('#score').text( gameControl.score );
	$('#message').text( gameControl.message );
}