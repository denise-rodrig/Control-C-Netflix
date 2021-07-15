//conteudo do owl para ativar função carrrosel
//conteudo owl sendo q o $ diz que é jquery
$('.owl-carousel').owlCarousel({
    loop:true,//opcao de loop
    margin:10,//margem de cada div
    nav:false,//menu de navegação
    responsive:{//modo responsivo
        0:{
            items:1//nesse caso 1
        },
        600:{
            items:3//nesse caso 3
        },
        1000:{
            items:5//se tem 1000 px apresenta 5 itens
        }
    }
})