$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('header').addClass('white');
	}
	else{
		$('header').removeClass('white');
			
			document.querySelector('.container-lingua').style.animationDelay = '0s';
			document.querySelector('.container-lingua').style.animationDuration = '1s';
			document.querySelector('.container-redes').style.animationDelay = '0.4s';
			document.querySelector('.container-redes').style.animationDuration = '1s';
	}
});

var $doc = $('html, body');
$('nav a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$('#home a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$('header #logo').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});