function fadeIn() {
	$("body *:not(.no-fade-in, .active > .card-preview)").animate({opacity:1.0}, 2000);
}
window.addEventListener('load',fadeIn);


