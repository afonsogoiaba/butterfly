

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
    step4: {
      en: "initialize the plugin and translate the entire page body",
      pt: "iniciar o plugin e traduzir o body da página"
    },
    step5: {
      en: "change to another language",
      pt: "mudar para outro idioma"
    },
    step6: {
      en: "try it",
      pt: "experimentar"
    },
    "translate to English": {
      pt: "traduzir para Inglês"
    },
    "translate to Portuguese": {
      pt: "traduzir para Português"
    },
    string_translate_key: {
      en: "After you initialize the component you can translate a string",
      pt: "Depois do componente iniciado, pode-se traduzir uma string"
    },
    "Download translate.js": {
      pt: "Descarregar translate.js"
    }
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



    
    

