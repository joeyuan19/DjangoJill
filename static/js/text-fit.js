function resizeFont() {
	$('.text-fit').each(function() {
		$(this).scaleFont();
	});
}
$.fn.fitTextToSingleLine = function() {
	var _width = $(this).width(),
		width  = $(this).parent().width();
	var x = parseInt($(this).css('font-size'));
	if (width > _width) {
		if (_width/width > 0.9) {
			return;
		}
		while (width > _width) {
			x += 1;
			$(this).css('font-size',x+'px');
			_width = $(this).width();
			if (x > 40) {
				break;
			}
		}
	} else {
		while (_width > width) {
			x -= 1;
			$(this).css('font-size',x+'px');
			_width = $(this).width();
			if (x < 12) {
				break;
			}
		}
	}
}
$.fn.scaleFont = function(){
	var elm_parent = $(this).parent();
	var height = elm_parent.height(),
		width = elm_parent.width();
	$(this).css('font-size',height*.7 + 'px');
}
window.addEventListener('load', resizeFont);
window.addEventListener('resize',resizeFont);
