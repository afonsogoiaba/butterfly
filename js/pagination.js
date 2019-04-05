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
	let arrDescricao = ['Esse projeto foi desenvolvido durante o primeiro semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 1. Foi o trabalho final da matéria com o objetivo de desenvolver uma portfólio de Web Designer.',
											'Este projeto foi desenvolvido durante o primeiro semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 1. Seu objetivo era fazer com que os alunos produzissem um porfólio com base nos conhecimentos aprendidos em sala.',
											'O Limbo Driver foi uma proposta de sistema para o segundo semestre de 2017 para obtenção de nota na disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 2. Funciona assim como o Google Drive, porém com um sistema de acesso via token, descartando usuario e senha para tarefas simples.',
											'Yago & Aldair são uma dupla sertaneja cover conhecida na região de Dourados/MS. Fizeram um show no espaço "Quintal Espetos" e para divulgar o local, precisavam de uma arte para um banner que espalhariam pela cidade. Este foi o primeiro trabalho que fiz como Designer Gráfico.',
											'Portfolio das estrelas foi um projeto desenvolvido durante o segundo semestre de 2017 como trabalho final da disciplina de Linguagem de Apresentação e Estruturação de Conteúdos 2. O objetivo era criar uma página web responsiva aplicando os conhecimentos obtidos nas duas máterias.',
											'Portwiki foi meu trabalho de conclusão de curso (TCC) do ensino médio integrado ao técnico. Sua ideia se baseava na maior plataforma de aprendizado de programação: w3schools.com, porém com objetivo de funcionar como um plataforma gerenciadora de mini-cursos do instituto federal em questão.',
											'O projeto da plataforma Sodelivery Express foi obtido como Freelancer. O cliente queria uma plataforma a princípio brasileira a nível Nacional de delivery de motos, caminhões e cargas. No entanto, por ser o primeiro trabalho como freelancer e ser bem extenso, trabalhoso e feito por uma equipe de 4 pessoas, não foi possível concluí-lo.',
											'Este portfólio, foi começou a ser desenvolvido em 12 de fevereiro de 2019 e foi finalizado em 5 de abril de 2019. Seu objetivo além de servir como repositório de projetos e uma forma de demonstrar meu trabalho para meus clientes em poucos cliques, é também uma linha do tempo em escala de evolução como programador. Nele é possível ver os projetos desde quando comecei na área, a até os mais atuais ja finalizados ou em desenvolvimento.'
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