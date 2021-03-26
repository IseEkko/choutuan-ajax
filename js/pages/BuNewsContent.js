$(function() {
    var s = $(".send").height()
    var h = window.innerHeight - s
    var m = $(".middle").height()

    if( m <= h) {
        h = h + 'px'
        $('.middle').css('height', h)
    } else {
        m = m + s
        m = m +'px'
        $('.middle').css('height', m)
        $('.middle').css('margin-bottom', '2rem')
    }

    var imgh = $('.middle>div').height()
    imgh = imgh + 'px'
    $('.bunews_title').css('line-height',imgh)

    $('.back').on('click',function() {
        window.location.href = "BuNews.html";
    })

})