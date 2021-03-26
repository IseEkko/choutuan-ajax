$(function() {
    $('.function>div').on('click',function() {
        index = $(this).index()
        if(index === 0) {
            $('.middle>div').hide()
            $('.B_system').show()
        } else if(index === 1) {
            $('.middle>div').hide()
            $('.B_rider').show()
        } else if(index == 2) {
            $('.middle>div').hide()
            $('.B_client').show()
        }
    })

    $('#set').on('click', function () {
        window.location.href = "BuNewsContent.html";
    })
     
    $('#ho').on('click', function () {
        window.location.href = "HoNewsContent .html";
    })
    
    $('#use').on('click', function () {
        window.location.href = "UseNewsContent.html";
    })
    $('#one').on('click',function() {
        window.location.href = "BuHome.html";
    })
    $('#two').on('click',function() {
        window.location.href = "BuOrder.html";
    })
    $('#four').on('click',function() {
        window.location.href = "Business.html";
    })

})