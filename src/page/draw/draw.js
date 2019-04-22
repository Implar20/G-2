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
        console.log(i)
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
    tCanv('.text_list li:eq(0)', '旁门正道', '旁门正道')
    tCanv('.text_list li:eq(1)', '郑庆科黄油体', '郑庆科黄油体')
    tCanv('.text_list li:eq(2)', '站酷快乐体', '站酷快乐体')
    tCanv('.text_list li:eq(3)', '站酷高端黑', '站酷高端黑')
    tCanv('.text_list li:eq(4)', '站酷酷黑', '站酷酷黑')
    tCanv('.text_list li:eq(5)', '台湾明体', '台湾明体')
    tCanv('.text_list li:eq(6)', '微软正黑体', '微软正黑体')
    tCanv('.text_list li:eq(7)', '歌以晓手迹行楷体', '歌以晓手迹行楷体')
    tCanv('.text_list li:eq(8)', '海派强调明姿简', '海派强调明姿简')
    tCanv('.text_list li:eq(9)', '潮字社风云简', '潮字社风云简')
    tCanv('.text_list li:eq(10)', '联盟起艺卢帅正锐黑体', '联盟起艺卢帅正锐黑体')
    tCanv('.text_list li:eq(11)', '鬼子体', '鬼子体')
    tCanv('.text_list li:eq(12)', '青柳隷书', '青柳隷书')
    tCanv('.text_list li:eq(13)', '二次元胖头鱼体', '二次元胖头鱼体')
    tCanv('.text_list li:eq(14)', '圆润露锋芒', '圆润露锋芒')
    tCanv('.text_list li:eq(15)', '汉仪二码墨书繁', '汉仪二码墨书繁')
    tCanv('.text_list li:eq(16)', '汉仪晓波花月圆简', '汉仪晓波花月圆简')
    tCanv('.text_list li:eq(17)', '極限塚黑 L', '極限塚黑 L')
    tCanv('.text_list li:eq(18)', '瘦默陌硬笔手写体', '瘦默陌硬笔手写体')
    tCanv('.text_list li:eq(19)', '汉仪天宇风行体', '汉仪天宇风行体')

    // 字体
    function tCanv(sel, font) {
        $(sel).click(function () {
            var itext = new fabric.IText(font, {
                fontFamily: font,
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
    }

    /**
     * fabric 背景
     */
    function cCanv(sel, color) {
        $(sel).click(function () {
            var rect = new fabric.Rect({
                left: 0,
                top: 0,
                fill: color,
                width: 595,
                height: 595,
                selectable: false
            })
            ctx.add(rect)
        })
    }
    cCanv('.color_menu .color_item:eq(0) span', '#1ABC9C')
    cCanv('.color_menu .color_item:eq(1) span', '#2ECC71')
    cCanv('.color_menu .color_item:eq(2) span', '#3498DB')
    cCanv('.color_menu .color_item:eq(3) span', '#9B59B6')
    cCanv('.color_menu .color_item:eq(4) span', '#34495E')
    cCanv('.color_menu .color_item:eq(5) span', '#F1C40F')
    cCanv('.color_menu .color_item:eq(6) span', '#E67E22')
    cCanv('.color_menu .color_item:eq(7) span', '#E74C3C')
    cCanv('.color_menu .color_item:eq(8) span', '#ECF0F1')
    cCanv('.color_menu .color_item:eq(9) span', '#95A5A6')
    cCanv('.color_menu .color_item:eq(10) span', '#FFB7DD')
    cCanv('.color_menu .color_item:eq(11) span', '#FFCCCC')
    cCanv('.color_menu .color_item:eq(12) span', '#FFC8B4')
    cCanv('.color_menu .color_item:eq(13) span', '#FFDDAA')
    cCanv('.color_menu .color_item:eq(14) span', '#FFEE99')
    cCanv('.color_menu .color_item:eq(15) span', '#FFFFBB')
    cCanv('.color_menu .color_item:eq(16) span', '#EEFFBB')
    cCanv('.color_menu .color_item:eq(17) span', '#CCFF99')
    cCanv('.color_menu .color_item:eq(18) span', '#99FF99')
    cCanv('.color_menu .color_item:eq(19) span', '#BBFFEE')
    cCanv('.color_menu .color_item:eq(20) span', '#AAFFEE')
    cCanv('.color_menu .color_item:eq(21) span', '#99FFFF')
    cCanv('.color_menu .color_item:eq(22) span', '#CCEEFF')
    cCanv('.color_menu .color_item:eq(23) span', '#CCDDFF')
    cCanv('.color_menu .color_item:eq(24) span', '#CCCCFF')
    cCanv('.color_menu .color_item:eq(25) span', '#CCBBFF')
    cCanv('.color_menu .color_item:eq(26) span', '#D1BBFF')
    cCanv('.color_menu .color_item:eq(27) span', '#E8CCFF')
    cCanv('.color_menu .color_item:eq(28) span', '#F0BBFF')
    cCanv('.color_menu .color_item:eq(29) span', '#FFB3FF')
    cCanv('.color_menu .color_item:eq(30) span', '#000000')
    
    $('.color_add').paigusu({}, function(e, obj) {
        var color = '#' + obj.hex
        var rect = new fabric.Rect({
            left: 0,
            top: 0,
            fill: color,
            width: 595,
            height: 595,
            selectable: false
        })
        ctx.add(rect)
    })
    /**
     * 删除
     */
    $(window).keydown(function (e) {
        if (e.keyCode == '46') {
            var el = ctx.getActiveObject()
            ctx.remove(el)
        }
    })
    $('.clear').click(function () {
        ctx.clear()
    })

    setInterval(function () {
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
