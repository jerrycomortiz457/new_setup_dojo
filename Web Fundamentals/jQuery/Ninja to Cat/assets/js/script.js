$(document).ready(function(){
	$('img').click(function(){
		var ninja = ($(this).attr('data-alt-src'));
		var cat = ($(this).attr('data-alt-src1'));

		if ($(this).attr('src') != $(this).attr('data-alt-src')){
			$(this).attr('src',ninja);
		}
		else
		{
			$(this).attr('src',cat);
		}
	});
});

