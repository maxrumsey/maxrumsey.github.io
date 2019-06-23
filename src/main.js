function scrollToE(f) {
	$('html').animate({
    scrollTop: $('#' + f).offset().top
	},500);
}
