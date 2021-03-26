$(function(){
$(".number").mousedown(function(e){
        $(".tan_window").show();
})
$("#inpt").mousedown(function(){
    this.placeholder="";
})

$(".function>div").click(function() {
    $(".function>div").css('background','none')
    $(this).css('background','#fff')
})
$(".tabBar>div").click(function() {
    $(".tabBar>div").css('background','none')
    $(this).css('background','#F6F4F4')
})
$('.tail_person').on('click',function() {
    window.location.href = "BuPesonal.html";
})
$('.tail_wallet').on('click',function() {
    window.location.href = "BuWallet .html";
})
$('.tail_set').on('click',function() {
    window.location.href = "Busetting.html";
})
$('#one').on('click',function() {
    window.location.href = "BuHome.html";
})
$('#two').on('click',function() {
    window.location.href = "BuOrder.html";
})
$('#threw').on('click',function() {
    window.location.href = "BuNews.html";
})
})