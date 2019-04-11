$(function () {
    /* 滚动条插件 */
    $(window).on("load", function () {
        $(".content_icon").mCustomScrollbar()
    })

    var windowW = $(window).width()
    var windowH = $(window).height()

    $('.content').css('height', windowH - 60)
    $('.section').css({
        'width': windowW - 410,
        'height': windowH - 60
    })
    /**
     * fabric.js 控制
     */
    var ctx = new fabric.Canvas('ctx')
    function fabricShow(path) {
        fabric.Image.fromURL(path, function (oImg) {
            oImg.set({
                top: 297,
                left: 297,
                originX: 'center',
                originY: 'center'
            })
            ctx.add(oImg)
        })
    }
    $('.icon_item img').click(function () {
        var path = $(this).attr('src')
        fabricShow(path)
    })
    $('.shape_item img').click(function () {
        var path = $(this).attr('src')
        fabricShow(path)
    })

    /**
     * 预览 保存 下载
     */

    /**
     * 切换 tag
     */
    function switchTag(ele) {
        if (ele.attr('class').indexOf('active') !== -1)
            return
        ele.addClass('active').siblings().removeClass('active')
    }

    $('.icon').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'inline-block')
        $('.icon_item').css('display', 'none')
        $('.shape_item').css('display', 'inline-block')
    })
    $('.shape').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'inline-block')
        $('.shape_item').css('display', 'none')
        $('.icon_item').css('display', 'inline-block')
    })
    $('.text').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'none')
        $('.text_menu').css('display', 'inline-block')
    })
    $('.bg').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'none')
    })

    /**
     * fabric 文字
     */
    $('.text_menu h1').click(function() {
        var str = $('.text_menu input').val()
        var text = new fabric.Text(str, {
            left: 100,
            top: 100,
            fontWeight: 'bold'
        })
        ctx.add(text)
    })
})