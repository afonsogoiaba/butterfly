

$(function() {

  var t = {
    "The Evolution": {
      en: "The Evolution",
      pt: "A Evolução"
    },

    "Portfolio":{
      en: "Portfolio",
      pt: "Portfólio"
    },

    "Home": {
      en: "Home",
      pt: "Início"
    },

    "Federal Institute": {
      en: "Federal Institute",
      pt: "Instituto Federal"
    },

    "LoopSoft Development": {
      en: "LoopSoft Development",
      pt: "LoopSoft Desenvolvimento"
    },

    "Contact": {
      en: "Contact",
      pt: "Contato"
    },

    "Brazil - Portuguese": {
      en: "Brazil - Portuguese",
      pt: "Brasil - Português"
    },

    "United States - English": {
      en: "United States - English",
      pt: "Estados Unidos - Inglês"
    },

    "About": {
      en: "About",
      pt: "Sobre"
    },

    "Language": {
      en: "Language",
      pt: "Linguagem"
    },

    "Social Media": {
      en: "Social Media",
      pt: "Mídias Sociais"
    },

    "The butterflies evolve, as well as a good <span>Designer.</span>": {
      en: "The buttlerflies evolve, as well as a good <span>Designer.</span>",
      pt: "As borboletas evoluem, assim como um bom <span>Designer.</span>"
    },

    "Start": {
      en: "Start",
      pt: "Iniciar"
    },

    "Finalized in 22/06/2017": {
      en: "Finalized in 22/06/2017",
      pt: "Finalizado em 22/06/2017"
    },

    "Academy work": {
      en: "Academy work",
      pt: "Trabalho acadêmico"
    },

    "flower stylist": {
      en: "flower stylist",
      pt: "Estilista de flores"
    },

    "Finalized in 28/06/2017": {
      en: "Finalized in 28/06/2017",
      pt: "Finalizado em 28/06/2017"
    },

    "Finalized in 03/10/2017": {
      en: "Finalized in 03/10/2017",
      pt: "Finalizado em 03/10/2017"
    },

    "Yago and Aldair": {
      en: "Yago and Aldair",
      pt: "Yago e Aldair"
    },

    "Finalized in 18/11/2017": {
      en: "Finalized in 18/11/2017",
      pt: "Finalizado em 18/11/2017"
    },

    "External work": {
      en: "External work",
      pt: "Trabalho externo"
    },

    "Portfolio of stars": {
      en: "Portfolio of stars",
      pt: "Portfólio das estrelas"
    },

    "Finalized in 04/12/2017": {
      en: "Finalized in 04/12/2017",
      pt: "Finalizado em 04/12/2017"
    },

    "Portwiki Platform": {
      en: "Portwiki Platform",
      pt: "Plataforma Portwiki"
    },

    "Finalized in 01/12/2018": {
      en: "Finalized in 01/12/2018",
      pt: "Finalizado em 01/12/2018"
    },

    "In progress": {
      en: "In progress",
      pt: "Em Progresso"
    },

    "Development Front-end": {
      en: "Development Front-end",
      pt: "Desenvolvimento Front-end"
    },

    "Development Back-end": {
      en: "Development Back-end",
      pt: "Desenvolvimento Back-end"
    },

    "send you message!":{
      en: "send you message!",
      pt: "envie sua mensagem!"
    },

    "Name: ":{
      en: "Name: ",
      pt: "Nome: "
    },

    "Subject matter: ":{
      en: "Subject matter: ",
      pt: "Assunto: "
    },

    "Message: ":{
      en: "Message: ",
      pt: "Menssagem: "
    },

    "Send email": {
      en: "Send email",
      pt: "Enviar email"
    },
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});



    
    

