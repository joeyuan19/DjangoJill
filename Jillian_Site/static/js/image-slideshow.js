function slideShow(i) {
	var next_i;
	if (i >= 4) {
		next_i = 1;
	} else {
		next_i = i + 1;
	}
	// out
	$("#img"+i).animate({
		opacity:0,
	},1000);
	// in
	$("#img"+next_i).animate({
		opacity:1,
	},1000);
	setTimeout(function(){slideShow(next_i);},3000);
}
document.onready=function () {
	slideShow(1);
}

