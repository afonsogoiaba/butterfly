// Declaração de variaveis para a função de popular pagina;

var topoTitulo = document.getElementById('topo_page_title');
var titulo = document.getElementById('titulo_page');
var descricao = document.getElementById('descricao_page');
var subtitulo = document.getElementById('subtitulo_page');
var imagem = document.getElementById('imagem_page');


// função de popular página recebendo como parâmetros via index.html: 
// id --> numero que corresponde ao titulo que aparece na guia do navegador, titulo do projeto e descrição;
// inicio --> posição inicial do vetor de imagens de um projeto;
// fim --> posição final do vetor de imagens de um projeto;
// sub --> id da etiqueta do projeto (se é acadêmico ou externo);

function popula(id, inicio, fim, sub){

	// Dados sendo setados no localStorage para serem implementados na page.html;
	localStorage.setItem('key', id);
	localStorage.setItem('inicio', inicio);
	localStorage.setItem('fim', fim);
	localStorage.setItem('subtitulo', sub);

	// vetor para titulos da aba do navegador;
	let arrTopTitulo = ['Adam Gontier | Web Designer',
											'Flower Stylist | Portfolio',
											'Limbo Driver | Cloud Storage',
											'Yago & Aldair | Design Banner',
											'Portfolio of Starts | Portfolio',
											'Portwiki Platform | TCC',
											'Sodelivery Express | Delivery',
											'The Evolution | Portfolio'
										 ];

	// vetor de títulos dos projetos;
	let arrTitulo = ['Adam Gontier Designer',
									 'Flower Stylist',
									 'Limbo Driver',
									 'Yago & Aldair',
									 'Portfolio of Stars',
									 'Portwiki Platform',
									 'Sodelivery Express',
									 'The Evolution Portfolio'
									 ];

	//vetor das descrições dos projetos; 
	let arrDescricao = ['This project was developed during the first semester of 2017 to obtain a grade on the subject of Presentation Language and Content Structuring 1. It was the final work of the subject with the goal of developing a portfolio of Web Designer.',
											'This project was developed during the first semester of 2017 to obtain a grade in the subject of Presentation Language and Content Structuring 1. Its goal was to make students produce a portfolio based on the knowledge acquired in the classroom.',
											'Limbo Driver was a the proposed system for the second half of 2017 to get a grade in the Discipline of Presentation and Content Structuring 2 language. It works like Google Drive, but with a token access system, discarding user and password for simple tasks.',
											'Yago e Aldair are a cover duo known in the Dourados / MS region. They did a show in the space Quintal Espetos and to publicize the place, they needed an art for a banner that would spread by the city. This was the first job I did as Graphic Designer.',
											'Portfolio of the stars was a project developed during the second semester of 2017 as final work of the discipline of Language of Presentation and Structuring of Contents 2. The goal was to create a responsive web page applying the knowledge gained in both subjects.',
											'Portwiki was my course completion work from highschool (TCC). His idea was based on the largest programming learning platform: w3schools.com, but intended to function as a mini-course management platform for the federal institute in question.',
											'The Sodelivery Express platform project was obtained as Freelancer. The client wanted a Brazilian platform at the national level of delivery of goods with motorcycles, trucks and freighters. However, as it was the first job as a freelancer and was very extensive, laborious and done by a team of 4 people, it was not possible to complete it.',
											'This portfolio was started to be developed on February 12, 2019 and was finalized on April 6 , 2019. Its purpose beyond serving as a repository of projects and a way to demonstrate my work to my clients in a few clicks is also a timeline of evolutionary scale as a programmer. It is possible to see projects from when I started in the area, to the most current ones already completed or in development.'
											];

	//vetor das duas tags de projetos; 
	let arrSubtitulo = ['Academy work',
											'external work'
										 ];


	//vetor das imagens dos projetos; 
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
									 './img/works/laec2/afonso-port/port-stars-img-4.png',
									 './img/works/tcc-portwiki/portwiki-img-1.png',
									 './img/works/tcc-portwiki/portwiki-img-2.png',
									 './img/works/tcc-portwiki/portwiki-img-3.png',
									 './img/works/tcc-portwiki/portwiki-img-4.png',
									 './img/works/tcc-portwiki/portwiki-img-5.png',
									 './img/works/sodelivery-express/sod-img-1.png',
									 './img/works/sodelivery-express/sod-img-2.png',
									 './img/works/sodelivery-express/sod-img-3.png',
									 './img/works/sodelivery-express/sod-img-4.png',
									 './img/works/sodelivery-express/sod-img-5.png',
									 './img/works/sodelivery-express/sod-img-6.png',
									 './img/works/sodelivery-express/sod-img-7.png',
									 './img/works/the-evolution/evolution-img-1.png',
									 './img/works/the-evolution/evolution-img-2.png',
									 './img/works/the-evolution/evolution-img-3.png',
									 './img/works/the-evolution/evolution-img-4.png',
									 './img/works/the-evolution/evolution-img-5.png'
									 ];

	//pegando as variaveis e implementando os resultados das buscas com base na posição do id;
	topoTitulo.innerHTML = arrTopTitulo[id];
	titulo.innerHTML = arrTitulo[id];
	descricao.innerHTML = arrDescricao[id];
	subtitulo.innerHTML = arrSubtitulo[sub];


	// for para definir onde é o inicio e fim das imagens de cada projeto;
	// a cada interação do for, uma tag img é criada, adicionando-se uma classe e o src com base na posição da interação dentro do vetor;
	for(var i = inicio; i <= fim; i++){
		let img = document.createElement("img");
		img.className = 'img-js';
		img.src = arrImagem[i];
		// console.log(img);
		imagem.appendChild(img);
	}

	// verificação das tags dos projetos (acadêmico ou externo);
	// --> se for academico, adiciona a cor azul esverdeado;
	// --> se for externo, adiciona a cor amarela;
	let box = document.querySelector('.star');
	if(localStorage.getItem('subtitulo') == 0){

		box.style.background = 'var(--color-1)';

	}else{
		box.style.background = 'var(--amarelo)';
	}

	// verificação para que no projeto que possui apenas 1 imagem, o footer fique no lugar certo;
	if(localStorage.getItem('inicio') == 10){

		document.querySelector('.container-projeto').style.height ='100vh';

	}else{
		document.querySelector('.container-projeto').style.height = '100%';
	}
	
	// localStorage.clear();
}


// função da pagina page.html;
// o body recebe essa função em onload;
// ele recebe os dados do localStorage e passa para a função de popular a página;
// que por sua vez, escreve os projetos na pagina;
function reloadId(){
	let key = localStorage.getItem('key');
	let inicio = localStorage.getItem('inicio');
	let fim = localStorage.getItem('fim');
	let sub = localStorage.getItem('subtitulo');

	popula(key, inicio, fim, sub);
}