$(function(){
    $(".set_login").mousedown(function(){
        $("#frist").hide();
        $("#second").show();
    })
    $("#button").mousedown(function(){
        $("#second").hide();
        $("#frist").show();
    })
    $(".set_sets").mousedown(function(){
        $("#frist").hide();
        $("#thrid").show();
    })
    $(".heard_imgg").mousedown(function(){
        $("#frist").show();
        $("#thrid").hide();
    })
    $(".fonts").on('click',function() {
        window.location.href = "BusinessLogin.html";
    })
    $('.set_set').on('click',function() {
        window.location.href = "FindPassword.html";
    })
    $('.heard_img').on('click',function() {
        window.location.href = "Business.html";
    })
})