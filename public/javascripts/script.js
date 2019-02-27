// responsive nav
$('.menu-toggle').click(function(){

    $('.nav-ul').toggleClass('nav-open',350);
    $(this).toggleClass('menu-toggle--open')

})

$(document).ready(function () {
    // sticky nav
    $('#about-us--js').waypoint(function (direction) {
        if (direction == 'down'){
            $('nav').addClass("sticky")
            $('nav').addClass("animated faster fadeIn")
        } else {
            $('nav').removeClass('sticky')
            $('nav').removeClass("fadeIn")
            

        }
    }, {
        offset: '15%'
    })


    //Animations
    $('.header-top').addClass('animated fadeInDown')
    $('.hero-text').addClass('animated fadeInLeft')

    $()
    
    $('#about-us--js').waypoint(function(dir){
        $('.about-us-img').addClass('animated fadeInLeft')
        $('.about-us-text').addClass('animated fadeInRight')
        $('.header-top').removeClass('animated fadeInDown')
    }, {
        offset: '35%'
    })

    $('.bar-section').waypoint(function(dir){
        $('.text-bar').addClass('animated fadeInLeft')
    }, {
        offset: '30%'
    })

    $('#locations').waypoint(function (dir) {
        $('.where-to--main').addClass('animated fadeIn')
        $('.where-to--hours').addClass('animated fadeIn')
        $('.location-get').addClass('animated delay-1s pulse')
    }, {
        offset: '50%'
    })

    $(".go-to-locations").click(function() {
        $('html, body').animate({
            scrollTop: $("#locations").offset().top
        }, 1500);
    });

})