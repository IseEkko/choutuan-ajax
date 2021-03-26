$(function() {
    $('.function>div').on('click',function() {
        index = $(this).index()
        if(index === 0) {
            $('.middle>div').hide()
            $('.refund_orders').show()
        } else if(index === 1) {
            $('.middle>div').hide()
            $('.Send_the_order').show()
        } else if(index == 2) {
            $('.middle>div').hide()
            $('.Completed_order').show()
        }
    })


    $('.rsee_btn').on('click',function() {
        window.location.href = "BuRefundOrder.html";
    })

    $('.ssee_btn').on('click',function() {
        window.location.href = "BuHand.html";
    })

    $('.osee_btn').on('click',function() {
        window.location.href = "BuComplete.html";
    })
    $('#one').on('click',function() {
        window.location.href = "BuHome.html";
    })
    $('#threw').on('click',function() {
        window.location.href = "BuNews.html";
    })
    $('#four').on('click',function() {
        window.location.href = "Business.html";
    })
})