function init() {
	resize();
	$('.res-chooser-btn').click(function() {
		if ($('.res-chooser-list').height() == 0) {
			$('.res-chooser-list').css({
				'left': $('.res-chooser-btn').offset().left-$(window).scrollLeft(),
				'width':$(this).outerWidth(),
			}).animate({height:getCompoundHeight('res-chooser-list-option'),opacity:1});
		} else {
			$('.res-chooser-list').animate({height:0,opacity:0});
		}
	});
	$('.res-chooser-list-option').click(function() {
		if (!$(this).hasClass('active')) {
			$('.res-chooser-list-option').removeClass('active');
			$(this).addClass('active');
			$('.pdf-display-container').each(function(){
				$(this).animate({height:0,opacity:0},250,function(){
					$(this).children('.pdf-display').removeClass('active');	
				});
			});
			console.log($(this).attr('name'));
			$('#'+$(this).attr('name')).css({'top':'100%'}).animate({top:0,height:'90%',opacity:1},250,function(){
				$(this).children('.pdf-display').addClass('active');
			});
			$('.res-choice').text($(this).attr('name'));
		}
		$('.res-chooser-btn').click();
	});
}
function getCompoundHeight(className) {
	var total = 0;
	$('.'+className).each(function() {
		total += $(this).outerHeight();
	});
	return total;
}
function resize() {
	$('.res-chooser').each(function() {
		var label = $('.resize-label'),
			icon  = $('.resize-icon');
		label.css({'font-size':(.9*icon.height())+'px'});
		$('.res-chooser-list').css({
			'top':($('.res-chooser-btn').offset().top+$('.res-chooser-btn').height()-$(window).scrollTop())+'px',
			'left':($('.res-chooser-btn').offset().left-$(window).scrollLeft())+'px',
			'width':($('.res-chooser-btn').outerWidth())+'px',
		});
		if ($('.res-chooser-list').height() == 0) {
			$('.res-chooser-list').css({
				'height': 0,
			});
		} else {
			$('.res-chooser-list').css({
				'height': getCompoundHeight('res-chooser-list-option'),
			});
		}
	});
}
window.addEventListener('resize',resize);
window.addEventListener('scroll',resize);
window.addEventListener('load',init);


