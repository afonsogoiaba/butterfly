var topoTitulo = document.getElementById('topo_page_title');
var titulo = document.getElementById('titulo_page');
var descricao = document.getElementById('descricao_page');
var subtitulo = document.getElementById('subtitulo_page');
var imagem = document.getElementById('imagem_page');



function popula(id, inicio, fim, sub){
	localStorage.setItem('key', id);
	localStorage.setItem('inicio', inicio);
	localStorage.setItem('fim', fim);
	localStorage.setItem('subtitulo', sub);

	let arrTopTitulo = ['Adam Gontier | Web Designer',
											'Flower Stylist | Portfolio',
											'Limbo Driver | Cloud Storage',
											'Yago & Aldair | Design Banner',
											'Portfolio of Starts | Portfolio'
										 ];

	let arrTitulo = ['Adam Gontier Designer',
									 'Flower Stylist',
									 'Limbo Driver',
									 'Yago & Aldair',
									 'Portfolio of Stars'

									 ];

	let arrDescricao = ['Esse projeto foi desenvolvido durante o primeiro semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 1. Foi o trabalho final da matéria com o objetivo de desenvolver uma portfólio de Web Designer.',
											'Este projeto foi desenvolvido durante o primeiro semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 1. Seu objetivo era fazer com que os alunos produzissem um porfólio com base nos conhecimentos aprendidos em sala.',
											'O Limbo Driver foi uma proposta de sistema para o segundo semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 2. Funciona assim como o Google Drive, porém com um sistema de acesso via token, descartando usuario e senha para tarefas simples.',
											'Yago & Aldair são uma dupla sertaneja cover conhecida na região de Dourados/MS. Fizeram um show no espaço "Quintal Espetos" e para divulgar o local, precisavam de uma arte para um banner que espalhariam pela cidade. Este foi o primeiro trabalho que fiz como Designer Gráfico.',
											'Portfolio das estrelas foi um projeto desenvolvido durante o segundo semestre de 2017 como trabalho final da disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 2. O objetivo era criar uma página web responsiva aplicando os conhecimentos obtidos nas duas máterias.'
											];
	let arrSubtitulo = ['Academy work',
											'external work'
										 ];

	let arrImagem = ['./img/works/laec1/afonso-port/afonso-port-img-1.PNG',
									 './img/works/laec1/afonso-port/afonso-port-img-2.PNG',
									 './img/works/laec1/afonso-port/afonso-port-img-3.png',
									 './img/works/laec1/afonso-port/afonso-port-img-4.png',
									 './img/works/laec1/dani-port/dani-img-1.png',
									 './img/works/laec1/dani-port/dani-img-2.png',
									 './img/works/laec2/afonso-limbo/limbo-img-1.png',
									 './img/works/laec2/afonso-limbo/limbo-img-2.png',
									 './img/works/laec2/afonso-limbo/limbo-img-3.png',
									 './img/works/laec2/afonso-limbo/limbo-img-4.png',
									 './img/works/design/design-final.jpg',
									 './img/works/laec2/afonso-port/port-stars-img-1.png',
									 './img/works/laec2/afonso-port/port-stars-img-2.png',
									 './img/works/laec2/afonso-port/port-stars-img-3.png',
									 './img/works/laec2/afonso-port/port-stars-img-4.png'
									 ];

	topoTitulo.innerHTML = arrTopTitulo[id];
	titulo.innerHTML = arrTitulo[id];
	descricao.innerHTML = arrDescricao[id];
	subtitulo.innerHTML = arrSubtitulo[sub];

	for(var i = inicio; i <= fim; i++){
		let img = document.createElement("img");
		img.className = 'img-js';
		img.src = arrImagem[i];
		console.log(img);
		imagem.appendChild(img);
	}

	let box = document.querySelector('.star');

	if(localStorage.getItem('subtitulo') == 0){

		box.style.background = 'var(--color-1)';
	}
	else{
		box.style.background = 'var(--amarelo)';
	}


	console.log(localStorage.getItem('key'));
	console.log(localStorage.getItem('inicio'));
	console.log(localStorage.getItem('fim'));
	console.log(localStorage.getItem('subtitulo'));
	// localStorage.clear();
}

function reloadId(){
	let key = localStorage.getItem('key');
	let inicio = localStorage.getItem('inicio');
	let fim = localStorage.getItem('fim');
	let sub = localStorage.getItem('subtitulo');

	popula(key, inicio, fim, sub);
}