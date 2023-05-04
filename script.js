$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   

});




$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 2, // define o número de itens a serem exibidos por slide
      slidesToScroll: 2, // define o número de itens a serem percorridos por slide
      dots: true, // exibe os pontos de navegação
      arrows: false, // esconde as setas de navegação
      responsive: [
        {
          breakpoint: 768, // define a largura da tela em que as configurações abaixo devem ser aplicadas
          settings: {
            slidesToShow: 1, // define o número de itens a serem exibidos por slide
            slidesToScroll: 1 // define o número de itens a serem percorridos por slide
          }
        }
      ]
    });
  });
  


