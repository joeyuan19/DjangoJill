function pauseAudio() {
	document.getElementById('audio-player').pause();
}


function set_new_card(id) {
	// old active -> spot 1
	// shift inactives by one
	// new active -> display
	var active_left = '40%',
		inactive_height = '20%',
		active_height = '100%',
		inactive_width = '30%',
		active_width = '60%',
		inactive_left = '5%',
		inactive_tops = new Array('20%','40%','60%','80%');
	if ($('#'+id).hasClass('active')) {
		return;
	} else if ($('#'+id).is(':animated')) {
		return;
	} else if ($('#'+id).hasClass('freeze')) {
		return;
	}
	if ($('#audio').hasClass('active')) {
		pauseAudio();
	}
	var inactive   = $('.card:not(.active):not(#'+id+')'),
	old_active = $('.card.active'),
	new_active = $('#'+id),
	duration = 500;
	
	inactive.animate({opacity:1},duration);
	if (new_active.hasClass('card-spot-1')) {		
		old_active.animate({
				left:1.5*$(window).width(),
				opacity:0
			},duration/2,function(){
				$(this).css('left',-(1.5*$(this).width()));
				$(this).css('top',inactive_tops[1]);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-1');
				$(this).children('.card-display').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');
				});
				$(this).children('.card-preview').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');	
				});
			}
		).animate({left:inactive_left,opacity:1,width:inactive_width},duration/2);

		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-1');
				$(this).children('.card-display').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');
				});
				$(this).children('.card-preview').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');	
				});
			}
		).animate({top:0,height:active_height},duration/2);
	}  else if (new_active.hasClass('card-spot-2')) {
		old_active.animate({
				left:1.5*$(window).width(),
				opacity:0
			},duration/2,function(){
				$(this).css('left',-(1.5*$(this).width()));
				$(this).css('top',inactive_tops[2]);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-2');
				$(this).children('.card-display').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');
				});
				$(this).children('.card-preview').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');	
				});
			}
		).animate({left:inactive_left,opacity:1,width:inactive_width},duration/2);

		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-2');
				$(this).children('.card-display').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');
				});
				$(this).children('.card-preview').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');	
				});
			}
		).animate({top:0,height:active_height},duration/2);
	}  else if (new_active.hasClass('card-spot-3')) {
		old_active.animate({
				left:1.5*$(window).width(),
				opacity:0
			},duration/2,function(){
				$(this).css('left',-(1.5*$(this).width()));
				$(this).css('top',inactive_tops[3]);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-3');
				$(this).children('.card-display').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');
				});
				$(this).children('.card-preview').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');	
				});
			}
		).animate({left:inactive_left,opacity:1,width:inactive_width},duration/2);

		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-3');
				$(this).children('.card-display').animate({opacity:1},duration/4,function() {
					$(this).css('z-index','3');
				});
				$(this).children('.card-preview').animate({opacity:0},duration/4,function() {
					$(this).css('z-index','2');	
				});
			}
		).animate({top:0,height:active_height},duration/2);
	}
}


function init_cards() {
	var cards = $(".card"), i, itr = 0, elm;
	for (i = 0; i < cards.length; i++) {
		elm = $(cards[i]);
		if (elm.hasClass('active')) {
			elm.css('left','40%');
			elm.css('top','0%');
			elm.css('width','60%');
			elm.css('height','100%');
			elm.children(".card-preview").animate({opacity:0},function() {
				$(this).css('z-index','2');
			});
			elm.children(".card-display").animate({opacity:1},function() {
				$(this).css('z-index','3');
			});
		} else {
			elm.css('top',(40 + itr*20) + '%');
			elm.css('left','5%');
			elm.css('width','30%');
			elm.children(".card-preview").css('z-index','3');
			elm.children(".card-display").css('z-index','2');
			itr++;
		}
	}
}




window.addEventListener('load', function() {init_cards();});


