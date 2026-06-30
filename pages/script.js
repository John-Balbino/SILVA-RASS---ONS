$('.menu-show').click(function(){
    //adciona o parametro click a classe selecionada

    $('.home,.institucional, .Area, .publicacoes, .Contact').hide();
    //esconde todas as sections selecionada pela classe

    const alvoBtn = $(this).data('target');
    //cria uma constante para guardar a classe do botao clicado

    $('.'+ alvoBtn).hide().slideDown(1000);
    //seleciona a classe do botao clicado e ativa o parametro show

})
//animação de inicio de pagina 
$(document).ready(function(){
    $('body').hide().fadeIn(2000);
})  
//esconde as sections que não são a home
$(".home").show();
$(".institucional").hide();
$(".Area").hide();
$(".publicacoes").hide();
$(".Contact").hide();

//menu toogle
$('#menu-toggle').click(function(){

  const navMenu = $('nav ul');
  navMenu.slideToggle(1000);
  
  if(navMenu.is(':visible')){
    setTimeout(function(){
      navMenu.slideUp();
    }, 9000);
    }
})

//imagens perfil
$(document).ready(function(){
  let indice = 0;
  const imagens =$('.box-perfil img');

   // mostra só a primeira no início
  imagens.hide().eq(indice).show();

  $(".switch").click(function(){
    // esconde a imagem atual com efeito
    imagens.eq(indice).show(500);

    // avança para a próxima
    indice = (indice + 1) % imagens.length;

    // mostra a nova imagem com efeito
    imagens.eq(indice).hide(500);
  });
});

    
