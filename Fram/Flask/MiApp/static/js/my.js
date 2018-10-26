//导航栏里的下载app效果,二维码显示
$('.download').mouseover(function() {
    // console.log("a");
    //鼠标移进.download标签时显示
    $('.download .box').css("display", "block");
});
$('.download').mouseout(function() {
    //鼠标移出.download标签时隐藏
    $('.download .box').css("display", "none");
    //鼠标移进.box时显示
    $('.download .box').mouseover(function() {
        // console.log("b");
        $('.download .box').css("display", "block");
    });
    //鼠标移出.box时隐藏
    $('.download .box').mouseout(function() {
        // console.log("c");
        $('.download .box').css("display", "none");
    });
});

// #######################################################
//导航栏里的购物车显示效果
$('.top-cart').mouseover(function () {
    // console.log("a");
    //鼠标移进.cart标签时显示
    $('.cart').css({
        "color": "#ff6700",
        "background": "#fff",
        "text-decoration": "none",
        "outline": "0"
    });
    $('.cart-menu').css("display", "block");
    
});

$('.top-cart').mouseout(function () {
    $('.cart-menu').mouseover(function () {
        // 鼠标出.cart标签，同时移除.cart-menu标签时隐藏
        $('.cart').css({
            "color": "#ff6700",
            "background": "#fff",
            "text-decoration": "none",
            "outline": "0"
        });
    });
    $('.cart').css({
        "color": "#b0b0b0",
        "background": "#424242",
    });
    $('.cart-menu').css("display", "none");
});

// ###########################################
// 第二排导航栏点击效果
$('.header-ul li').mouseover(function(){
    $(this).children('a').css({
        "color": "#ff6700",
        "outline": "0",
    });
}).mouseout(function(){
    $(this).children('a').css({
        "color": "#333"
    });
});
// 第二排搜索框效果
$('.search-text').focus(function () {
    // console.log("聚焦");
    $('.search-keyword').fadeOut(200);
    $('.search-btn').css("border", "1px solid #ff6700");
    $('.search-text').css("border", "1px solid #ff6700");
    $('.keyword-list').css("display", "block");
}).blur(function(){
    $('.search-keyword').fadeIn(200);
    $('.search-btn').css("border", "1px solid #e0e0e0");
    $('.search-text').css("border", "1px solid #e0e0e0");
    $('.keyword-list').css("display", "none");
});


