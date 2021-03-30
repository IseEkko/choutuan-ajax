$(function() {
    $('.Contact_the_user').on('click',function() {
        window.location.href = "UseNewsContent.html"
    })
    $(".Call_the_rider").mousedown(function(e){
        $(".up_window").show();
})
$(".up_img").mousedown(function(e){
    $(".up_window").hide();

})
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

    function getBuHand() {
        $.ajax({
            type: "GET",
            url: "http://choutuan.cwp.cool/api/business/bfinishorder?+order_id="+val,
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
                $(".merchandise_news").empty().append(str)
                let str2='';
                str2+=
                    `
			<div>
			    <div class="order_time">
			        <p>订单编号：${data.data[0].order_id}</p>
			        <p>客户订单提交时间：${data.data[0].created_at}</p>
			        <p>配送时间：12:20</p>
			    </div>
			    <div class="rider_time">
			        <p>骑手电话号码：${data.data[0].number}</p>
			        <p>骑手取货时间：${data.data[0].time}</p>
					<p>客户收货时间：${data.data[0].time}</p>
			    </div>
			</div>
		
			`

                $(".order_information").empty().append(str2)

            },
            error: function (data) {
                console.log("error")
            }
        })
    }




})


// function getBuHand() {
//     $.ajax({
//         type: "GET",
//         url: "http://choutuan.cwp.cool/api/business/bfinishorder?+order_id=22",
//         dataType: "json",
//         success: function (data) {
//             if (data.code === 200) {
//                 console.log("提供数据成功" + data.msg)
//             }
//             if (data.code === 100) {
//                 console.log("提供数据失败" + data.msg)
//             }
//             let str = ``;
//             str +=`
// 				    <div class="merchandise_img">
// 				        <div>
// 				            <img src="${data.data[0].image_url}" alt="">
// 				        </div>
// 				    </div>
// 				    <div class="merchandise_name">
// 				        <h6>${data.data[0].name}</h6>
// 				        <p>${data.data[0].goods_name}</p>
// 				        <p>配送费：￥${data.data[0].delivery}</p>
// 				    </div>
// 				    <div class="merchandise_price">
// 				        <p>￥${data.data[0].price}</p>
// 				        <p>共计：${data.data[0].total}元</p>
// 				    </div>
//                     `
//             $(".merchandise_news").empty().append(str)
//             let str2='';
//             str2+=
//                 `
// 			<div>
// 			    <div class="order_time">
// 			        <p>订单编号：${data.data[0].order_id}</p>
// 			        <p>客户订单提交时间：${data.data[0].created_at}</p>
// 			        <p>配送时间：12:20</p>
// 			    </div>
// 			    <div class="rider_time">
// 			        <p>骑手电话号码：${data.data[0].number}</p>
// 			        <p>骑手取货时间：${data.data[0].time}</p>
// 					<p>客户收货时间：${data.data[0].time}</p>
// 			    </div>
// 			</div>
//
// 			`
//
//             $(".order_information").empty().append(str2)
//
//         },
//         error: function (data) {
//             console.log("error")
//         }
//     })
// }
//
//
//
// $(document).ready(getBuHand);