$(function(){
    $(".btn").mousedown(function(){
        // $("#Buoperson").hide();
        $("#window").show();
    })
    $("#sure").mousedown(function(){
        $(".up_window").show();
        $("#window").hide();
    })
    $(".up_img").mousedown(function(){
        $("#window").hide()
        $(".up_window").hide();
        $(".Buoperson").show();
    })
    $("#false").mousedown(function(){
        $("#window").hide();
        $("#Buoperson").show();
    })
    $('.heard_img').on('click',function() {
        window.location.href = "Business.html";
    })
})