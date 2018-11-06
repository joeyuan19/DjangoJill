function set_new_card(id) {
	// old active -> spot 1
	// shift inactives by one
	// new active -> display 
	var active_left = '40%',
		inactive_height = '50%',
		active_height = '100%',
		inactive_width = '10%',
		active_width = '60%',
		inactive_top = '50%',
		inactive_lefts = new Array('0%','10%','20%','30%');
	if ($('#'+id).hasClass('active')) {
		return;
	} else if ($('#'+id).is(':animated')) {
		return;
	}
	var inactive   = $('.card:not(.active):not(#'+id+')'),
	old_active = $('.card.active'),
	new_active = $('#'+id),
	duration = 500;

	if (new_active.hasClass('card-spot-1')) {
		// Animate Old Active Card
		// active -> card 3
		old_active.animate({
				left:$(window).width()+50,
				opacity:0
			},duration/2,function(){
				$(this).css('left',-($(this).width()+50)+'px');
				$(this).css('top',inactive_top);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-3');
				$(this).children('.card-display').animate({opacity:0},250);
				$(this).children('.card-preview').animate({opacity:1},250);
			}
		).animate({left:inactive_lefts[3],opacity:1,width:inactive_width},duration/2);
		// Animate Inactive Card
		inactive.each(function() {
			if ($(this).hasClass('card-spot-2')) {
				// card 2 -> card 1
				$(this).animate({
					left:$(window).width()+50,
				},duration/2,function() {
					$(this).css('left',-($(this).width()+150) +'px');
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
					$(this).removeClass('card-spot-2').addClass('card-spot-1');
				}).animate({left:inactive_lefts[1],width:inactive_width},duration/2);
			} else if ($(this).hasClass('card-spot-3')) {
				// card 3 -> card 2
				$(this).animate({
					left:$(window).width() + 50,
				},duration/2,function() {
					$(this).css('left',-($(this).width()+100) +'px');
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
					$(this).removeClass('card-spot-3').addClass('card-spot-2');
				}).animate({left:inactive_lefts[2],width:inactive_width},duration/2);
			}
		});
		// Animate New Active Card
		// card 1 -> active
		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-1');
				$(this).children('.card-display').animate({opacity:1},250);
				$(this).children('.card-preview').animate({opacity:0},250);
			}
		).animate({top:0,height:active_height},duration/2);
	}  else if (new_active.hasClass('card-spot-2')) {
		// Animate Old Active Card
		// active -> card 2
		old_active.animate({
				left:$(window).width()+50,
				opacity:0
			},duration/2,function(){
				$(this).css('left',-($(this).width()+50));
				$(this).css('top',inactive_top);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-2');
				$(this).children('.card-display').animate({opacity:0},250);
				$(this).children('.card-preview').animate({opacity:1},250);
			}
		).animate({left:inactive_lefts[2],opacity:1,width:inactive_width},duration/2);
		// Animate Inactive Cards
		inactive.each(function() {
			if ($(this).hasClass('card-spot-1')) {
				// card 1 -> card 3
				$(this).animate({
					left:inactive_lefts[3],
				},duration,function() {
					$(this).removeClass('card-spot-1').addClass('card-spot-3');
					$(this).css('width',inactive_width);
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
				});
			} else if ($(this).hasClass('card-spot-3')) {
				// card 3 -> card 1
				$(this).animate({
					left:$(window).width() + 50,
				},duration/2,function() {
					$(this).css('left',-($(this).width()+50) +'px');
					$(this).css('width',inactive_width);
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
					$(this).removeClass('card-spot-3').addClass('card-spot-1');
				}).animate({left: inactive_lefts[1]},duration/2);
			}
		});
		// Animate New Active Card
		// card 2 -> active
		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-2');
				$(this).children('.card-display').animate({opacity:1},250);
				$(this).children('.card-preview').animate({opacity:0},250);
			}
		).animate({top:0,height:active_height},duration/2);
	}  else if (new_active.hasClass('card-spot-3')) {
		// Animate Old Active Card
		// active -> card 1
		old_active.animate({
				left:$(window).width()+10,
				opacity:0
			},duration/2,function(){
				$(this).css('left',-($(this).width()+10));
				$(this).css('top',inactive_top);
				$(this).css('height',inactive_height);
				$(this).removeClass('active').addClass('card-spot-1');
				$(this).children('.card-display').animate({opacity:0},250);
				$(this).children('.card-preview').animate({opacity:1},250);
			}
		).animate({left:inactive_lefts[1],opacity:1,width:inactive_width},duration/2);
		// Animate Inactive Card	
		inactive.each(function() {
			if ($(this).hasClass('card-spot-1')) {
				// card 1 -> card 2
				$(this).animate({
					left:inactive_lefts[2],
				},duration,function() {
					$(this).css('width',inactive_width);
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
					$(this).removeClass('card-spot-1').addClass('card-spot-2');
				});
			} else if ($(this).hasClass('card-spot-2')) {
				// card 2 -> card 3
				$(this).animate({
					left:inactive_lefts[3],
				},duration,function() {
					$(this).css('width',inactive_width);
					$(this).css('top',inactive_top);
					$(this).css('height',inactive_height);
					$(this).removeClass('card-spot-2').addClass('card-spot-3');
				});
			}
		});
		// Animate New Active Card
		// card 3 -> active
		new_active.animate({
				left:active_left,
				width:active_width
			},duration/2,function() {
				$(this).addClass('active').removeClass('card-spot-3');
				$(this).children('.card-display').animate({opacity:1},250);
				$(this).children('.card-preview').animate({opacity:0},250);
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
			elm.children(".card-preview").animate({opacity:0});
			elm.children(".card-display").animate({opacity:1});
		} else {
			elm.css('left',(10 + itr*10) + '%');
			elm.css('top','50%');
			itr++;
		}
	}
}


