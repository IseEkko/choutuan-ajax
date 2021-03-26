$(function() {
    $('.function>div').on('click',function() {
        index = $(this).index()
        if(index === 0) {
            $('.middle>div').hide()
            $('.My_goods').show()
        } else if(index === 1) {
            $('.middle>div').hide()
            $('.customer_evaluation').show()
        } else if(index == 2) {
            $('.middle>div').hide();
            $('.news').show();
        }
    })
    // $("#tt").click(function(e){
    //     alert(111)
    //     $(".up_window").show();
    
    // })
    // $(".up_img").mousedown(function(e){
    //     $("up_window").hide();
    // })
    $(".sure").mousedown(function(){
        $(".up_window").show()
    })
    $(".new_food").mousedown(function(){
        $("#window").show()
    })
})