var overlay = document.querySelector('.overlay');
var line1 = document.querySelector('.line-1');
var line2 = document.querySelector('.line-2');
var line3 = document.querySelector('.line-3');
var containerMenu = document.querySelector('.container-menu');
var paragrafoMenu = document.querySelector('.menu p');
var containerMidia = document.querySelector('.container-midia');
var header = document.querySelector('header');


function start(){
	overlay.style.height = '0%';
	overlay.style.top = '-500px';
	overlay.style.transition = '0.5s';


	paragrafoMenu.style.top = '-500px';
	paragrafoMenu.style.transition = '0.5s';

	line1.style.display ='block';
	line1.style.transition = '0.5s';


	line2.style.marginBottom = '6px';
	line2.style.transform = 'rotate(0deg)';
	line2.style.width = '40px';
	line2.style.transition = '0.5s';

	line3.style.transform = 'rotate(0deg)';
	line3.style.width = '40px';
	line3.style.transition = '0.5s';
	line3.style.position = 'relative';
	line3.style.bottom = '0px';

	containerMenu.style.right = '10px';
	containerMenu.style.top = '10px';
	containerMenu.style.position = 'fixed';

	header.style.height = 'unset';
	header.style.overflowY = 'visible';
	document.querySelector('html').style.overflowY = 'scroll';
	document.querySelector('.container-menu-social-lingua').style.animationName = 'none';

}

function abrefechaMenu(){

	if(overlay.style.height == '0%'){

		line1.style.display = 'none';
		line1.style.transition = '0.5s';

		line2.style.marginBottom = '0px';
		line2.style.marginBottom = '0px';
		line2.style.transform = 'rotate(40deg)';
		line2.style.width = '30px';
		line2.style.transition = '0.5s';

		line3.style.transform = 'rotate(140deg)';
		line3.style.width = '30px';
		line3.style.position = 'relative';
		line3.style.bottom = '3px';
		line3.style.transition = '0.5s';
		
		containerMenu.style.zIndex = '2';
		containerMenu.style.top = '13px';
		containerMenu.style.position = 'absolute';
		
		
		overlay.style.height = 'unset';
		overlay.style.width = '100%';
		overlay.style.top = '10px';
		overlay.style.transition = '0.3s';

		paragrafoMenu.style.top = '0px';
		paragrafoMenu.style.transition = '0.3s';

		header.style.height = '100%';
		header.style.overflowY = 'scroll';
		document.querySelector('html').style.overflowY = 'hidden';
		document.querySelector('.container-menu-social-lingua').style.animationName = 'fade';

	}else{
		line1.style.animationName = 'none';
		line1.style.opacity = '1';
		start();
	}
}

document.querySelectorAll("nav a").forEach(function(item){

  item.onclick = function(){
		line1.style.animationName = 'none';
  	line1.style.opacity = '1';
  	start();
  }  
});