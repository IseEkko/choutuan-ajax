$(function() {
    $('.Contact_the_user').on('click',function() {
        window.location.href = "UseNewsContent.html"
    })

    $('.rider_affirm').on('click',function() {
        window.location.href = "BuComplete.html"
    })
    $('.back').on('click',function() {
        window.location.href = "BuOrder.html";
    })
    $(".Call_the_rider").mousedown(function(e){
        $(".up_window").show();
})
$(".up_img").mousedown(function(e){
    $(".up_window").hide();

})
})