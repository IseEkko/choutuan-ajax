$(function() {

    // URL传值
    var Request = new Object();
    Request = GetRequest();
    var val = Request["num"];
    console.log(val)
    //URL传值解析函数
    function GetRequest() {
        var url = decodeURI(location.search); //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }


    $('.Contact_the_user').on('click',function() {
        window.location.href = "UseNewsContent.html"
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



    // 派送订单 查看
    function getBuHand(order_id) {

        $.ajax({
            type: "GET",
            url: "http://choutuan.cwp.cool/api/business/bdeliveryorder?order_id="+val,
            dataType: "json",
            success: function (data) {
                if (data.code === 200) {
                    console.log("提供数据成功" + data.msg)
                }
                if (data.code === 100) {
                    console.log("提供数据失败" + data.msg)
                }
                let str = ``;
                str +=`



 <div class="merchandise_news">
        <div class="merchandise_img">
            <div>
                <img src="${data.data[0].image_url}" alt="">
            </div>
        </div>
        <div class="merchandise_name">
            <h6>${data.data[0].name}</h6>
				        <p>${data.data[0].goods_name}</p>
				        <p>配送费：￥${data.data[0].delivery}</p>
        </div>
        <div class="merchandise_price">
            <p>￥${data.data[0].price}</p>
				        <p>共计：${data.data[0].total}元</p>
        </div>
    </div>
    <div class="order_information">
        <div class="order_inner">
            <div class="order_time">
                   <p>订单编号：${data.data[0].order_id}</p>
			        <p>客户订单提交时间：2020</p>
			        <p>配送时间：12:20</p>
            </div>
            <div class="rider_time">
                   <p>骑手电话号码：${data.data[0].number}</p>
			        <p>骑手取货时间：12:20</p>
            </div>
        </div>
        <div class="order_information_btn">
            <button class="rider_affirm">确认骑手取货</button>
            <div><button class="Call_the_rider">致电骑手</button><button class="Contact_the_user">联系用户</button></div>
        </div>
    </div>`
                $(".middle").empty().append(str)


                // 骑手接单
                $('.rider_affirm').on('click',function() {
                    $.ajax({
                        type: "post",
                        url: "http://choutuan.cwp.cool/api/business/briderdelivery?order_id="+val,
                        dataType: "json",
                        success: function (data) {
                            if (data.code === 200) {
                                console.log("提供数据成功" + data.msg)
                            }
                            if (data.code === 100) {
                                console.log("提供数据失败" + data.msg)
                            }
                        },
                        error: function (data) {
                            console.log("error")
                        }
                    })
                    // window.location.href = "BuComplete.html"
                })


                // 致电骑手
                $('.Call_the_rider').on('click',function () {
                    $('.up_window').show();
                    $('.up_window').on('click',function () {
                        $(this).hide()
                    })
                })
//联系用户
                $('.Contact_the_user').on('click',function () {
                    $('.up_window').show();
                    $('.up_window').on('click',function () {
                        $(this).hide()
                    })
                })


            },
            error: function (data) {
                console.log("error")
            }
        })
    }
    $(document).ready(getBuHand);

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


})
