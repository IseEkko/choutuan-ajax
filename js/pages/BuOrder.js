$(function() {
    $('.function>div').on('click',function() {
        index = $(this).index()
        if(index === 0) {
            $('.middle>div').hide()
            $('.refund_orders').show()
        } else if(index === 1) {
            $('.middle>div').hide()
            $('.Send_the_order').show()
        } else if(index == 2) {
            $('.middle>div').hide()
            $('.Completed_order').show()
        }
    }
	)
	
    $('.rsee_btn').on('click',function() {
        // window.location.href = "BuRefundOrder.html";
    })

    $('.ssee_btn').on('click',function() {
        // window.location.href = "BuHand.html";
    })

    $('.osee_btn').on('click',function() {
        // window.location.href = "BuComplete.html";
    })
    $('#one').on('click',function() {
        // window.location.href = "BuHome.html";
    })
    $('#threw').on('click',function() {
        // window.location.href = "BuNews.html";
    })
    $('#four').on('click',function() {
        // window.location.href = "Business.html";
    }
	)
}
)

// 退款清单
function brefundorderlist(business_id) {
    $.ajax({
        type: "GET",
        url: "http://choutuan.cwp.cool/api/business/brefundorderlist",
        dataType: "json",
        data:{
            token:getCookie("token")
        },
        success: function (data) {
            if (data.code === 200) {
                console.log("提供数据成功" + data.msg)
            }
            if (data.code === 100) {
                console.log("提供数据失败" + data.msg)
            }
            let str = ``;
			str+=`   
			 <div class="refund_orders">
              <div class="middle_order">
                  
			`
			 for(var i = 0;i<data.data.length;i++){
            str +=`                    		
				   <div>
				       <div>${data.data[i].updated_at}</div>
				       <div>${data.data[i].name}</div>
				       <div class="order_idd">${data.data[i].order_id}</div>
				       <div>${data.data[i].total}</div>
				       <div>
				           <button class="see_btn osee_btn">查ggg看</button>
				       </div>
				   </div>
									`
           }
		   str+=`
		  
		   </div>
		   `
	  $(".middle_order1").empty().append(str)
            $('.osee_btn').click(function () {
                var num = $(this).parents("div").siblings(".order_idd").text()
                console.log(num)
                window.location.href = "BuRefundOrder.html?num=" + num;
            })

		   },
        error: function (data) {
            console.log("error")
        }
    })
}
$(document).ready(brefundorderlist);
//跳转到查看详情页
// function  goBuHand(id){
//     alert(111)
//     window.sessionStorage.setItem("order_id",id)
//     window.location.href = "BuHand.html"
// }
// function  goComplete(id){
//     alert(111)
//     window.sessionStorage.setItem("order_id",id)
//     window.location.href = "BuComplete.html"
// }
//
// function  goRefundOrder(id){
//     alert(111)
//     window.sessionStorage.setItem("order_id",id)
//     window.location.href = "BuRefundOrder.html"
// }
//展示详情页
function showDetail(){
    let  id = window.sessionStorage.getItem("order_id")
    $.ajax(


    )
}

// 派送订单
function bdeliveryorderlist(business_id) {
    $.ajax({
        type: "GET",
        url: "http://choutuan.cwp.cool/api/business/bdeliveryorderlist",
        dataType: "json",
        data:{
            token:getCookie("token")
        },
success: function (data) {
            if (data.code === 200) {
                console.log("提供数据成功" + data.msg)
            }
            if (data.code === 100) {
                console.log("提供数据失败" + data.msg)
            }
            let str = ``;
			str+=`   
			 <div class="Send_the_order">
              <div class="middle_order">
                  
			`
			 for(var i = 0;i<data.data.length;i++){
            str +=`                    		
				   <div>
				       <div>${data.data[i].updated_at}</div>
				       <div>${data.data[i].name}</div>
				       <div class="order_idd">${data.data[i].order_id}</div>
				       <div>${data.data[i].total}</div>
				       <div>
				           <button class="see_btn ssee_btn">查iii看</button>
				       </div>
				   </div>
									`
           }
		   str+=`
		  
		   </div>
		   `
	  $(".middle_order2").empty().append(str)

    $('.ssee_btn').click(function () {
        var num = $(this).parents("div").siblings(".order_idd").text()
        console.log(num)
        window.location.href = "BuHand.html?num=" + num;
    })
		   },
        error: function (data) {
            console.log("error")
        }
    })
}


$(document).ready(bdeliveryorderlist);

function bfinishorderlist(business_id) {
    $.ajax({
        type: "GET",
        url: "http://choutuan.cwp.cool/api/business/bfinishorderlist",
        dataType: "json",
        data:{
            token:getCookie("token")
        },
		success: function (data) {
            if (data.code === 200) {
                console.log("提供数据成功" + data.msg)
            }
            if (data.code === 100) {
                console.log("提供数据失败" + data.msg)
            }
            let str = ``;
			str+=`   
			 <div class="Completed_order">
              <div class="middle_order">
                  
			`
			 for(var i = 0;i<data.data.length;i++){
            str +=`                    		
				   <div>
				       <div>${data.data[i].updated_at}</div>
				       <div>${data.data[i].name}</div>
				       <div class="order_idd">${data.data[i].order_id}</div>
				       <div>${data.data[i].total}</div>
				       <div>
				           <button class="see_btn rsee_btn">查kkk看</button>
				       </div>
				   </div>
									`
           }
		   str+=`
		  
		   </div>
		   `
	  $(".middle_order3").empty().append(str)

            $('.rsee_btn').click(function () {
                var num = $(this).parents("div").siblings(".order_idd").text()
                console.log(num)
                window.location.href = "BuComplete.html?num=" + num;
            })
		   },
        error: function (data) {
            console.log("error")
        }
    })
}


$(document).ready(bfinishorderlist);
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

