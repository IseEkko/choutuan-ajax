$(function(){
    $(".inp_intp").click(function(){
     $(".up_window").show(0);
     // $(".up_window").css('z-index','999')
 }) 
 
 $(".up_img").click(function(){
     $(".up_window").hide(0);
 })
 $(".emails").mousedown(function(){
     this.placeholder='';
 })
 $(".emails1").mousedown(function(){
     this.placeholder='';
 })
 $(".emails").blur(function(){
  this.placeholder='请输入邮箱';
 
 })
 $(".emails1").blur(function(){
     this.placeholder='请设置登录密码';
    
    })
    $("#emails2").blur(function(){
        this.placeholder='请再次输入登录密码';
       
       })
       $(".inp_into").mousedown(function(){
           $("#Authen").hide();
           $("#Discuss").show();
       })
       $("#set_img").mousedown(function(){
        $("#Authen").show();
        $("#Discuss").hide();
       })

    //  $.fn.ipt=(function(){
    //        var ipt=$(".ipt");
           
    //              for(let i=0;i<ipt.length;i++){
    //                 ipt.click(function(){
    //            ipt[i].placeholder='';
           
    //         })
    //         }
         
    //   })
    //   $(".ipt").ipt();
    $("#1").mousedown(function(){
        this.placeholder='';
    })
    $("#2").mousedown(function(){
        this.placeholder='';
    })
    $("#3").mousedown(function(){
        this.placeholder='';
    })
    $("#4").mousedown(function(){
        this.placeholder='';
    })
    $("#5").mousedown(function(){
        this.placeholder='';
    })
    $("#6").mousedown(function(){
        this.placeholder='';
    })
    $("#7").mousedown(function(){
        this.placeholder='';
    })
    $("#1").blur(function(){
        this.placeholder='请输入电话号码';
    })
    $("#2").blur(function(){
        this.placeholder='请输入姓名';
    })

    $("#3").blur(function(){
        this.placeholder='请输入店铺名称';
    })

    $("#4").blur(function(){
        this.placeholder='请输入营业执照';
    })
    $("#5").blur(function(){
        this.placeholder='请输入店铺简介';
    })
    $("#6").blur(function(){
        this.placeholder='请输入店铺地址';
    })

    $("#7").blur(function(){
        this.placeholder='请输入电话号码';
    })

    $('.heard_img').on('click',function() {
                window.location.href = "BusinessLogin.html";
            })
    $('.heard_img').on('click',function() {
                window.location.href = "BusinessLogin.html";
            })
            $('.up_img').on('click',function() {
                window.location.href = "BusinessLogin.html";
            })
        })

