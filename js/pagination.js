var topoTitulo = document.getElementById('topo_page_title');
var titulo = document.getElementById('titulo_page');
var descricao = document.getElementById('descricao_page');
var subtitulo = document.getElementById('subtitulo_page');
var imagem = document.getElementById('imagem_page');



function popula(id, inicio, fim){
	localStorage.setItem('key', id);
	localStorage.setItem('inicio', inicio);
	localStorage.setItem('fim', fim);

	let arrTopTitulo = ['Adam Gontier | Web Designer'];
	let arrTitulo = ['Adam Gontier Designer'];
	let arrDescricao = ['Esse projeto foi desenvolvido durante o primeiro semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 1.'];
	let arrSubtitulo = ['Academy work', 'external work'];
	let arrImagem = ['./img/works/laec1/afonso-port/afonso-port-img-1.PNG', './img/works/laec1/afonso-port/afonso-port-img-2.PNG', './img/works/laec1/afonso-port/afonso-port-img-3.PNG', './img/works/laec1/afonso-port/afonso-port-img-4.PNG'];

	topoTitulo.innerHTML = arrTopTitulo[id];
	titulo.innerHTML = arrTitulo[id];
	descricao.innerHTML = arrDescricao[id];

	for(var i = inicio; i <= fim; i++){
			let img = document.createElement("img");
			img.className = 'img-js';
			img.src = arrImagem[i];
			console.log(img);
			imagem.appendChild(img);
	}


	console.log(localStorage.getItem('key'));
	console.log(localStorage.getItem('inicio'));
	console.log(localStorage.getItem('fim'));
	// localStorage.clear();
}

function reloadId(){
	let key = localStorage.getItem('key');
	let inicio = localStorage.getItem('inicio');
	let fim = localStorage.getItem('fim');

	popula(key, inicio, fim);
}