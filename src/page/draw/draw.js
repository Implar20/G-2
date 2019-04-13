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
                originY: 'center',
                // 边框
                transparentCorners: false,
                cornerColor: '#1b1b1b',
                borderColor: '#9d9d9d',
                cornerSize: 12,
                padding: 15,
                cornerStyle: 'circle',
                borderDashArray: [3, 3]
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
    $('.right_download a').click(function () {
        var show = convertCanvasToImage(ctx)
        var i = show.src
        $(this).attr({
            'href': i,
            'download': 'demo'
        })
    })

    function convertCanvasToImage(canvas) {
        var image = document.createElement('img')
        image.src = canvas.toDataURL('image/jpeg')
        return image
    }
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
        $('.text_menu').css('display', 'none')
        $('.color_menu').css('display', 'none')
    })
    $('.shape').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'inline-block')
        $('.shape_item').css('display', 'none')
        $('.icon_item').css('display', 'inline-block')
        $('.text_menu').css('display', 'none')
        $('.color_menu').css('display', 'none')
    })
    $('.text').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'none')
        $('.text_menu').css('display', 'inline-block')
        $('.color_menu').css('display', 'none')
    })
    $('.bg').click(function () {
        switchTag($(this))
        $('.list_menu').css('display', 'none')
        $('.color_menu').css('display', 'inline-block')
        $('.text_menu').css('display', 'none')
    })

    /**
     * fabric 文字
     */
    $('.text_menu h1').click(function () {
        // create a rectangle object
        var itext = new fabric.IText('添加 LOGO 名', {
            left: 180,
            top: 300,
            fontWeight: 'bold',
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        
        ctx.add(itext);
    })
    $('.text_menu p').click(function () {
        // create a rectangle object
        var itext = new fabric.IText('添加标语', {
            left: 260,
            top: 260,
            fontSize: 24,
            fontWeight: 'bold',
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    $('.text_list li:eq(0)').click(function() {
        var itext = new fabric.IText('旁门正道', {
            fontFamily: '旁门正道',
            left: 260,
            top: 260,
            fontSize: 24,
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    $('.text_list li:eq(1)').click(function() {
        var itext = new fabric.IText('郑庆科黄油体', {
            fontFamily: '郑庆科黄油体',
            left: 260,
            top: 260,
            fontSize: 24,
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    $('.text_list li:eq(2)').click(function() {
        var itext = new fabric.IText('站酷快乐体', {
            fontFamily: '站酷快乐体',
            left: 260,
            top: 260,
            fontSize: 24,
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    $('.text_list li:eq(3)').click(function() {
        var itext = new fabric.IText('站酷高端黑', {
            fontFamily: '站酷高端黑',
            left: 260,
            top: 260,
            fontSize: 24,
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    $('.text_list li:eq(4)').click(function() {
        var itext = new fabric.IText('站酷酷黑', {
            fontFamily: '站酷酷黑',
            left: 260,
            top: 260,
            fontSize: 24,
            strokeWidth: 2,
            transparentCorners: false,
            cornerColor: '#1b1b1b',
            borderColor: '#9d9d9d',
            cornerSize: 12,
            padding: 15,
            cornerStyle: 'circle',
            borderDashArray: [3, 3]
        })
        ctx.add(itext)
    })
    /**
     * fabric 背景
     */
    $('.color_menu .color_item:eq(0) span').click(function() {
        var rect = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'red',
            width: 595,
            height: 595,
            selectable: false
        })
        ctx.add(rect)
    })
    $('.color_menu .color_item:eq(1) span').click(function() {
        var rect = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'green',
            width: 595,
            height: 595,
            selectable: false
        })
        ctx.add(rect)
    })
    $('.color_menu .color_item:eq(2) span').click(function() {
        var rect = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'pink',
            width: 595,
            height: 595,
            selectable: false
        })
        ctx.add(rect)
    })
    /**
     * 预览
     */
    // $(".right_eye").click(function() {
    //     $('.mask').show()
    // })
    // $('.cancel').click(function() {
    //     $('.mask').hide()
    // })
    /**
     * 删除
     */
    $(window).keydown(function(e) {
        if (e.keyCode == '46') {
            var el = ctx.getActiveObject()
            ctx.remove(el)
        }
    })
    $('.clear').click(function() {
        ctx.clear()
    })

    setInterval(function() {
        if (ctx.getObjects().length > 0) {
            $('.clear a').css({
                'cursor': 'pointer',
                'opacity': 1
            })
        } else {
            $('.clear a').css({
                'cursor': 'default',
                'opacity': .5
            })
        }
    }, 100)
})
