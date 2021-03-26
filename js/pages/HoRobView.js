$(function () {
    var w = window.innerWidth
    var h = window.innerHeight
    mask.style.width = w + "px"
    mask.style.height = h + "px"

    $(".commission>button").on('click', function () {
        if ($("#mask").css('display', 'none')) {
            $("#mask").show(); //如果元素为隐藏,则将它显现
            setTimeout(function(){
                $('#mask').hide(); //将DIV标签隐藏。
                $('.commission>span').text('用户已取消订单')
                $('.commission>button').css('display','none')
            }, 3000);
        } else {
            $("#mask").hide(); //如果元素为显现,则将其隐藏
        }
    })
})

