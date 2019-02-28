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
		
		document.querySelector('.logo img').style.opacity = '0';
		document.querySelector('.logo img').style.animationName = 'fade';
		document.querySelector('.logo img').style.position = 'unset';
		document.querySelector('.logo img').style.animationDelay = '0s';
		document.querySelector('.logo img').style.animationDuration = '1s';

		document.querySelector('.logo h1').style.opacity = '0';
		document.querySelector('.logo h1').style.animationName = 'fade';
		document.querySelector('.logo h1').style.position = 'unset';
		document.querySelector('.logo h1').style.animationDelay = '0s';
		document.querySelector('.logo h1').style.animationDuration = '1s';

		document.querySelector('.logo span').style.opacity = '0';
		document.querySelector('.logo span').style.animationName = 'fade';
		document.querySelector('.logo span').style.position = 'unset';
		document.querySelector('.logo span').style.animationDelay = '0s';
		document.querySelector('.logo span').style.animationDuration = '1s';
	}
})