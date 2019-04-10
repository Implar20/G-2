$(function() {
    let windowH = $(window).height()
    let windowW = $(window).width()

    $('.container').css({
        'height': windowH + 60
    })
    $('.section').css({
        'height': windowH
    })
})