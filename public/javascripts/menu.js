// Respinsive nav
$('.menu-toggle').click(function(){

    $('.nav-ul').toggleClass('nav-open',350);
    $(this).toggleClass('menu-toggle--open')

})

//sticky nav
$(document).ready(function(){
    $('#menu-section--js').waypoint(function (dir) {
        if (dir == 'down'){
            $('nav').addClass("sticky")
            $('nav').addClass("animated faster fadeIn")
            $('.header-top').css('display', 'block')
        } else {
            $('nav').removeClass('sticky')
            $('nav').removeClass("fadeIn")
            $('.header-top').css('display', 'none')        

        }
    })

    $(".arrow-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#menu-section--js").offset().top
        }, 1500);
    });
    
})