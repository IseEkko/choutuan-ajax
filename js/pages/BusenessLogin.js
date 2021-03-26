$(function(){
   $("#switch_btn").mousedown(function(){
    if (this.children[0].checked == true) {

        this.children[1].className = "input";
       
    } else {

        this.children[1].className = "input  checked";
          
    }

   })
   var flag=1;
         
       $("#in").mousedown(function(){
    //    alert(11)
   
        if( flag==1){
    $(".emails2").attr("Type","password");
    flag=0;
    // alert(11);
        }
        else{
            $(".emails2").attr("Type","text");
    flag=1; 
        }

       })
    $(".emails").mousedown(function(){
        this.placeholder='';
    })
    $(".emails").blur(function(){
     this.placeholder='请输入您的登录邮箱';
    
    })
    $(".emails2").mousedown(function(){
        this.placeholder='';
    })
    $(".emails2").blur(function(){
     this.placeholder='请输入您的登录密码';
    
    })
    /**
     *  方法作用 商家登陆
     * 请求接口 http://choutuan.cwp.cool/api/business/login
     * @author lizhongzheng <github.com/bixuande>
     */
    $('#button').click(function() {
        $.ajax({
            async: false,
            type: "post",
            url: "http://choutuan.cwp.cool/api/business/login",
            dataType: "json",
            data: {
                email: $('#busemail').val(),
                password: $('#buspassword').val(),
            },
            success: function(data) {
                if (data.code === 200) {
                    Setcookie("token",data.data.token);
                    console.log(data.data.token)
                    console.log(data.msg);
                    window.location.href = "BuHome.html";
                }
               if (data.msg === 100){
                    alert('验证未完成或账号者用户名错误');
                }
            },
            error: function(data){
                console.log(data)
                console.log("error")
            }
        })
    })
    $('.a2').on('click',function() {
        window.location.href = "FindPassword.html";
    })
    $('.a1').on('click',function() {
        window.location.href = "DiscussAuthen.html";
    })
})


/**
 *存入token
 * @param name
 * @param value
 * @constructor
 */
function Setcookie (name, value){
    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);   //时间单位毫秒
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

    //即document.cookie= name+"="+value+";path=/";  时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
}


/**
 * 获取token
 * @param c_name
 * @returns {string}
 */
function getCookie(c_name){
//判断document.cookie对象里面是否存有cookie
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=")
        //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
