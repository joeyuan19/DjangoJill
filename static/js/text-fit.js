function resizeFont() {
	$('.text-fit').each(function() {
		$(this).scaleFont();
	});
}

$.fn.scaleFont = function(){
	var elm_parent = $(this).parent();
	var height = elm_parent.height(),
		width = elm_parent.width();
	$(this).css('font-size',height*.7 + 'px');
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * Credit to: http://stackoverflow.com/questions/1582534/calculating-text-width-with-jquery
 * * * * * * * * * * * * * * * * * * * * * * * * * * */
$.fn.textWidth = function(){
	var html_org = $(this).html();
	var html_calc = '<span>' + html_org + '</span>';
	$(this).html(html_calc);
	var width = $(this).find('span:first').width();
	$(this).html(html_org);
	return width;
};

window.addEventListener('load', resizeFont);
window.addEventListener('resize', resizeFont);

