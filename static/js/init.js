function thisFunctionWillEmailMe() {
	return Dajaxice.content.thisFunctionWillEmailMe(thisFunctionWillEmailMe_callback);
}

function thisFunctionWillEmailMe_callback(json) {
    if (json.call_status) {
		window.location = json.cargo;
	}
};
  
function thisFunctionWillCallMe() {
     return Dajaxice.content.thisFunctionWillCallMe(thisFunctionWillCallMe_callback);
}
		  
function thisFunctionWillCallMe_callback(json) {
	if (json.call_status) {
		window.location = json.cargo;
	}
};



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
			});
	$("#email").click(thisFunctionWillEmailMe);
	$("#phon").click(thisFunctionWillCallMe);
}


window.addEventListener('load', function() {init_UI();});



