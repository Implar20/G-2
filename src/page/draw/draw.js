$(function() {
    /* 滚动条插件 */
    $(window).on("load",function(){
        $(".content_icon").mCustomScrollbar()
    })


    var windowW = $(window).width()
    var windowH = $(window).height()

    $('.content').css('height', windowH - 60)
    $('.section').css({
        'width': windowW - 410,
        'height': windowH - 60
    })
})