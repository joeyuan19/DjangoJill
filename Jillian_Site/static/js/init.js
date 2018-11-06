function fadein_elements() {
	$("body *:not(.no-fade-in, .active > .card-preview)").animate({opacity:1.0}, 2000);
}

function preload(arrayOfImages) {
	$(arrayOfImages).each(function(){
			$('<img/>')[0].src = this;
			});
}
function init_UI() {
	$('#writing').click(function() {
			set_new_card('writing')
			});
	$('#about').click(function() {
			set_new_card('about')	
			});
	$('#latest').click(function() {
			set_new_card('latest')
			});
	$('#audio').click(function() {
			set_new_card('audio')
			pause_audio();
			});
}


window.addEventListener('load', fadein_elements);
window.addEventListener('load', init_UI);



