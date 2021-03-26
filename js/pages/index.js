$(function() {
    $('.function>div:first-child').css('background','#fff')
    $(".function>div").click(function() {
        $(".function>div").css('background','none')
        $(this).css('background','#fff')
    })
    $(".tabBar>div").click(function() {
        $(".tabBar>div").css('background','none')
        $(this).css('background','#F6F4F4')
    })
    $(".delete").click(function(){
        // alert(111)
        $(".up_window").show();
        // $("#window").hide();
    
    })
    $(".up_img").mousedown(function(e){
        $(".up_window").hide();
        $("#window").hide();
        $(".up_windows").hide();
        
    })
    $('#two').on('click',function() {
        window.location.href = "BuOrder.html";
    })
    $('#threw').on('click',function() {
        window.location.href = "BuNews.html";
    })
    $('#four').on('click',function() {
        window.location.href = "Business.html";
    })
    $('.detail').on('click',function() {
        window.location.href = "BuDetail.html";
    })
    $('.back').on('click',function() {
        window.location.href = "BuHome.html";
    })
    $('.more').on('click',function() {
        window.location.href = "BuRefundOrderdetail.html";
    })
    $("#sure").mousedown(function(){
        
        $(".up_windows").show()
    })
    $("#new_food").mousedown(function(){
        $("#window").show()
    })
    $("#false").mousedown(function(){
        
        $("#window").hide()
    })
})