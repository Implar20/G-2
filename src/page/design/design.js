$(function () {
    $('.header_text a').click(function () {
        $('.mask').css('display', 'block')
        $('.mask_cancel').click(function () {
            $('.mask').css('display', 'none')
        })
    })

    $('.btn-success').click(function () {
        var text = $('.mask_xu')
        var name = $('.mask_name')
        var list = $('.mask_list')
        var tel = $('.mask_tel')

        var str =
            `
        <tr>
            <td>${ name.val() }</td>
            <td>${ list.val() }</td>
            <td>${ text.val() }</td>
            <td>${ tel.val() }</td>
        </tr>
        `
        $('.table tbody').append(str)
        $('.mask').css('display', 'none')
    })
})