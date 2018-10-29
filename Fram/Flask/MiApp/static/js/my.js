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
$('.top-cart').mouseover(function() {
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

$('.top-cart').mouseout(function() {
    $('.cart-menu').mouseover(function() {
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
$('.header-ul li').mouseover(function() {
    $(this).children('a').css({
        "color": "#ff6700",
        "outline": "0",
    });
}).mouseout(function() {
    $(this).children('a').css({
        "color": "#333"
    });
});
// 第二排搜索框效果
$('.search-text').focus(function() {
    // console.log("聚焦");
    $('.search-keyword').fadeOut(200);
    $('.search-btn').css("border", "1px solid #ff6700");
    $('.search-text').css("border", "1px solid #ff6700");
    $('.keyword-list').css("display", "block");
}).blur(function() {
    $('.search-keyword').fadeIn(200);
    $('.search-btn').css("border", "1px solid #e0e0e0");
    $('.search-text').css("border", "1px solid #e0e0e0");
    $('.keyword-list').css("display", "none");
});

// 浏览器窗口发生变化时,侧边栏与窗口顶部最小为40px
$(window).resize(function() {

    var narbar_top = Number($('.top-bar').height());

    //元素高度
    var rightbar_height = Number($('.right-bar').height());
    //元素距离顶部偏移高度
    // var rightbar_off_height = Number($('.right-bar').offset().top);
    // 浏览器窗口高度
    var window_height = Number($(window).height());
    // //滚动条高度
    // var scrol_height = Number($(document).scrollTop());

    // // 元素距离底部高度
    // // var rightbar_b = window_height - (rightbar_height + rightbar_off_height - scrol_height);
    // var result = narbar_top + rightbar_height + rightbar_b - window_height
    // console.log($(window).height());

    // if (rightbar_off_height == narbar_top) {
    //     rightbar_b = window_height - (rightbar_height + rightbar_off_height - scrol_height);
    // };

    if (window_height < narbar_top + rightbar_height) {
        $('.right-bar').removeClass('fixed-bar_b').addClass('fixed-bar_t');
        // console.log("top..........");
    };

    if (window_height > narbar_top + rightbar_height) {
        $('.right-bar').removeClass('fixed-bar_t').addClass('fixed-bar_b');
        // console.log("bottom..........");
    };

});

// 侧边栏二维码弹出效果
$('.right-bar ul li').mouseover(function() {
    $(this).children('i').css("color", "#ff6700");
    $(this).children('a').css("color", "#ff6700");
    if ($(this).index() == 0) {
        $('.right-bar-saoma').show();
    }
}).mouseout(function() {
    $(this).children('i').css("color", "#757575");
    $(this).children('a').css("color", "#757575");
    if ($(this).index() == 0) {
        $('.right-bar-saoma').mouseover(function() {
            $('.right-bar-saoma').show();
        });
        $('.right-bar-saoma').hide();
    }
})

$(function() {
    // 菜单栏背景颜色随机变化
    $('#carousel-example-generic').on('slide.bs.carousel', function() {
        var value1 = Math.floor(Math.random() * 30 + 10);
        var value2 = Math.floor(Math.random() * 30 + 10);
        var value3 = Math.floor(Math.random() * 30 + 10);
        $('.menu').css('background', 'rgba(' + value1 + ', ' + value2 + ', +' + value3 + ', .4)');
    });

    // 分类栏弹出详情
    $('.menu ul li').mouseover(function() {
        // 获取li的class属性值
        var num_info = $(this).attr('class');
        // console.log(num_info);
        $('.' + num_info + '-info').css('display', 'block');
    }).mouseout(function() {
        var num_info = $(this).attr('class');
        $('.' + num_info + '-info').mouseover(function() {
            $('.' + num_info + '-info').css('display', 'block');
        }).mouseout(function() {
            $('.' + num_info + '-info').css('display', 'none');
        });
        $('.' + num_info + '-info').css('display', 'none');
    });

    // 
    $('.tuijian-goods ul li').eq(0).css('margin-right', '12px');
    $('.tuijian-goods ul li').eq(1).css('margin-right', '12px');
    $('.tuijian-goods ul li').eq(2).css('float', 'right');

    // 
    // $('.header .da-xiao i').eq(1).css('border-right', '1px solid #c0c0c0');


    // xiaomi-footer
    $('.xiaomi-footer div p span').first().css('border', 'none');
    $('.xiaomi-help ul li').last().css('border-right', 'none');
});