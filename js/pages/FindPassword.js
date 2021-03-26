$(function(){
$(".inp_into").click(function(){
    $(".up_window").show(0);
    // $(".up_window").css('z-index','999')
}) 

// $(".up_img").click(function(){
//     $(".up_window").hide(0);
// })
$("#em").mousedown(function(){
    this.placeholder='';
})
$("#emm").mousedown(function(){
    this.placeholder='';
})
$("#text").mousedown(function(){
    this.placeholder='';
})
$("#text").blur(function(){
 this.placeholder='请输入您的注册邮箱';

})
$("#em").blur(function(){
 this.placeholder='请输入您的登录密码';

})
$("#emm").blur(function(){
    this.placeholder='请再次输入新的登录密码';
   
   })
   $(".emails").mousedown(function(){
    this.placeholder='';
})
$(".emails").blur(function(){
 this.placeholder='请输入注册邮箱';

})
$(".inp_into").mousedown(function(){
    $("#find_pass").hide();
    $("#find_word").show();
})
$("#set_img").mousedown(function(){
    $("#find_pass").show();
    $("#find_word").hide();
    // alert(2343);
   })
//    var coutDown=60;
//     $.fn.setTime=function(val){
// if(coutDown==0){
//     val.removeAttribute("disable");
//     val.value="点击发送";
//     coutDown=60;
//     return
// }
// else{
//     val.setAttribute("disabled", true); 
//     val.value="重新发送(" + countDown + ")"; 
//     countDown--; 
// }
// setTimeout(function() { 
//     setTime(val) 
//     },1000) 
//     } 

$('.up_img').on('click',function() {
    window.location.href = "BusinessLogin.html";
})
$('.heard_img').on('click',function() {
    window.location.href = "Busetting.html";
})
})