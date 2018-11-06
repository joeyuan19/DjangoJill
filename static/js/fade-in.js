function fadeIn() {
	$("body *:not(.no-fade-in)").animate({opacity:1.0}, 2000);
}
window.addEventListener('load',fadeIn);


