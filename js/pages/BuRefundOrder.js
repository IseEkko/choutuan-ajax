$(function () {
    var w = window.innerWidth
    var h = window.innerHeight
    mask.style.width = w + "px"
    mask.style.height = h + "px"

    $(".refund").on('click', function () {
        if ($("#mask").css('display', 'none')) {
            $("#mask").show(); //如果元素为隐藏,则将它显现
            setTimeout(function () {
                $('#mask').hide(); //将DIV标签隐藏。
                $('.function').text('已退款')
                $('.refund').css('display', 'none')
            }, 3000);
        } else {
            $("#mask").hide(); //如果元素为显现,则将其隐藏
        }
    })
    $('.back').on('click',function() {
        window.location.href = "BuOrder.html";
    })

})