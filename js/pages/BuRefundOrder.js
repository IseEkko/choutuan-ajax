$(function () {
    var w = window.innerWidth
    var h = window.innerHeight
    mask.style.width = w + "px"
    mask.style.height = h + "px"

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


    $(document).ready(getBuHand);
    function getBuHand(order_id) {
        $.ajax({
            type: "GET",
            url: "http://choutuan.cwp.cool/api/business/brefundorder?order_id="+val,
            dataType: "json",
            // data:{
            //   order_id: val
            // },
            success: function (data) {
                if (data.code === 200) {
                    console.log("提供数据成功" + data.msg)
                }
                if (data.code === 100) {
                    console.log("提供数据失败" + data.msg)
                }
                let str = ``;

                str +=`


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
                    `
                //})
                // }

                $(".merchandise_news").empty().append(str)


                let str2='';
                str2+=
                    `
			<div>
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

			`
    //
    //             $(".order_time").empty().append(str2)
    //             // console.log(this.id);
    //             // let strr = `<span><a id="5" href="#" onclick="next_page(this.id)">第一页</a></span>
    //             //                 <span><a id="6" href="#" onclick="next_page(this.id)">上一页</a></span>
    //             //                 <span><a id="7" href="#" onclick="next_page(this.id)">下一页</a></span>
    //             //                 <span><a id="8" href="#" onclick="next_page(this.id)">末尾页</a></span>`
    //             // $("#pageChange").empty();
    //             // $("#pageChange").append(strr);
    //
    //
    //
                console.log(data.data[0].order_id + '666')
                $(".refund").on('click', function (order_id) {
                    $.ajax({
                        type: "post",
                        url: "http://choutuan.cwp.cool/api/business/bbackmoney?order_id="+val,
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
                    if ($("#mask").css('display', 'none')) {
                        $("#mask").show(); //如果元素为隐藏,则将它显现
                        setTimeout(function () {
                            $('#mask').hide(); //将DIV标签隐藏。
                            $('.function').text('已退款')
                            $('.refund').css('display', 'none')
                        }, 3000);
                    } else {
                        $("#mask").hide(); //如果元素为显现,则将其隐藏
                    }
                })
                $('.back').on('click',function() {
                    window.location.href = "BuOrder.html";
                })
            },
            error: function (data) {
                console.log("error")
            }
        })
    }


    // $(".refund").on('click', function (order_id) {
    //     $.ajax({
    //         type: "post",
    //         url: "http://choutuan.cwp.cool/api/business/bbackmoney?order_id="+order_id,
    //         dataType: "json",
    //         success: function (data) {
    //             if (data.code === 200) {
    //                 console.log("提供数据成功" + data.msg)
    //             }
    //             if (data.code === 100) {
    //                 console.log("提供数据失败" + data.msg)
    //             }
    //         },
    //         error: function (data) {
    //             console.log("error")
    //         }
    //     })
    //     if ($("#mask").css('display', 'none')) {
    //         $("#mask").show(); //如果元素为隐藏,则将它显现
    //         setTimeout(function () {
    //             $('#mask').hide(); //将DIV标签隐藏。
    //             $('.function').text('已退款')
    //             $('.refund').css('display', 'none')
    //         }, 3000);
    //     } else {
    //         $("#mask").hide(); //如果元素为显现,则将其隐藏
    //     }
    // })
    // $('.back').on('click',function() {
    //     window.location.href = "BuOrder.html";
    // })

})