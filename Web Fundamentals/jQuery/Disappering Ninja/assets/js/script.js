$(document).ready(function(){
	$('img').click(function(){
		$(this).hide();
	});

	$('#restoreButton').click(function(){
		$('img').show();
	})
});