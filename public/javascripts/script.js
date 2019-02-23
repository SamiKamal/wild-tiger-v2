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
})