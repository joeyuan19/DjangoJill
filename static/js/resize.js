
function resize_contact() {
	var list_container = $('#contact-list');
	var icons  = list_container.children('li'),
		height = list_container.height(),
		width  = list_container.width();
	var n = icons.length;
	if (n*height > width) {
		icons.each(function() {
			$(this).css('height',width/n+'px');
		});
	} 
}

function resize_all() {
	resize_contact();
}

window.addEventListener('resize',resize_all);


