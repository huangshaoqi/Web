//导航栏里的下载app效果,二维码显示
$('.download').mouseover(function () {
    // console.log("a");
    //鼠标移进.download标签时显示
    $('.download .box').css("display", "block");
});
$('.download').mouseout(function () {
    //鼠标移出.download标签时隐藏
    $('.download .box').css("display", "none");
    //鼠标移进.box时显示
    $('.download .box').mouseover(function () {
        // console.log("b");
        $('.download .box').css("display", "block");
    });
    //鼠标移出.box时隐藏
    $('.download .box').mouseout(function () {
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
$('.header-ul li').mouseover(function () {
    $(this).children('a').css({
        "color": "#ff6700",
        "outline": "0",
    });
}).mouseout(function () {
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
}).blur(function () {
    $('.search-keyword').fadeIn(200);
    $('.search-btn').css("border", "1px solid #e0e0e0");
    $('.search-text').css("border", "1px solid #e0e0e0");
    $('.keyword-list').css("display", "none");
});

// 浏览器窗口发生变化时,侧边栏与窗口顶部最小为40px
$(window).resize(function () {

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
$('.right-bar ul li').mouseover(function () {
    $(this).children('i').css("color", "#ff6700");
    $(this).children('a').css("color", "#ff6700");
    if ($(this).index() == 0) {
        $('.right-bar-saoma').show();
    }
}).mouseout(function () {
    $(this).children('i').css("color", "#757575");
    $(this).children('a').css("color", "#757575");
    if ($(this).index() == 0) {
        $('.right-bar-saoma').mouseover(function () {
            $('.right-bar-saoma').show();
        });
        $('.right-bar-saoma').hide();
    }
})

$(function () {
    // 菜单栏背景颜色随机变化
    $('.lunbo-img').on('slide.bs.carousel', function () {
        var value1 = Math.floor(Math.random() * 30 + 10);
        var value2 = Math.floor(Math.random() * 30 + 10);
        var value3 = Math.floor(Math.random() * 30 + 10);
        $('.menu').css('background', 'rgba(' + value1 + ', ' + value2 + ', +' + value3 + ', .4)');
    });

    // 分类栏弹出详情
    $('.menu ul li').mouseover(function () {
        // 获取li的class属性值
        var num_info = $(this).attr('class');
        // console.log(num_info);
        $('.' + num_info + '-info').css('display', 'block');
    }).mouseout(function () {
        var num_info = $(this).attr('class');
        $('.' + num_info + '-info').mouseover(function () {
            $('.' + num_info + '-info').css('display', 'block');
        }).mouseout(function () {
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



    $('.all-list,.menu').mouseover(function () {
        $('.menu').css('display', 'block');
    });

    $('.all-list').mouseout(function () {
        $('.menu').mouseout(function () {
            $('.menu').css('display', 'none');
        });
        $('.menu').css('display', 'none');
    });


    // 放大镜功能：
    $('.sell-goods-img').mouseover(function (e) {
        console.log("鼠标在上面。。。");
        console.log(e.pageX, e.pageY);
        // 显示右边大图
        $('.sell-goods-right').show();
        // 获取左边图的地址src,写入右边大图的div下的img src里
        var img_path = $('.sell-goods-left img').attr('src');
        // console.log(img_path);
        // console.log($('.sell-goods-right img').attr('src'));
        $('.sell-goods-right img').attr('src', img_path);
        // console.log($('.sell-goods-right img').attr('src'));
        $(".mengban").show();
        // 计算蒙版宽高
        var sw = $(".sell-goods-right").width() / $(".sell-goods-right img").width() * $(".sell-goods-img img").width();
        var sh = $(".sell-goods-right").height() / $(".sell-goods-right img").height() * $(".sell-goods-img img").height();


        $(".mengban").css({
            width: sw + 'px',
            height: sh + 'px',
            // marginTop:'-448px',
        });
        // 鼠标 移动事件
        $(".sell-goods-img").mousemove(function (e) {
            // 计算 鼠标的位置
            var mouW = e.pageX;
            var mouH = e.pageY;
            // console.log(mouW, mouH);
            // 元素的偏移位置
            var dof = $('.sell-goods-img').offset(); // {top:,left:}
            // console.log(dof);
            // 鼠标在左侧div里面移动的位置
            var newX = mouW - dof.left;
            var newY = mouH - dof.top;
            // console.log(newX,newY);
            // 得到 蒙版移动的位置
            var mengW = newX - $(".mengban").width() / 2;
            var mengH = newY - $(".mengban").height() / 2;
            console.log(mengW, mengH);
            // 判断左边是否到边界
            if (mengW < 0) {
                mengW = 0;
            }
            // 横向最大移动距离
            var maxW = $(".sell-goods-img").width() - $('.mengban').width();
            if (mengW >= maxW) {
                mengW = maxW;
            }
            // 纵向最大移动距离
            var maxH = $(".sell-goods-img").height() - $('.mengban').height();
            if (mengH >= maxH) {
                mengH = maxH;
            }
            // 判断到底部是否到边界
            if (mengH < 0) {
                mengH = 0;
            }
            //  蒙版移动位置
            $(".mengban").css({
                top: mengH + 'px',
                left: mengW + 'px'
            })
            console.log('上:'+$(".mengban").css('top'));
            console.log('左:'+$(".mengban").css('left'));
            // 右边图的位置
            var right_img_w = mengW * 2;
            var right_img_h = mengH * 2;
            console.log('右图上:' + $(".sell-goods-right img").css('top'));
            console.log('右图左:' + $(".sell-goods-right img").css('left'));
            console.log('要移动右边图片了');
            console.log($(".sell-goods-right img").css('top'));
            console.log($(".sell-goods-right img").css('left'));
            
            $(".sell-goods-right img").css({
                top: -right_img_h + 'px',
                left: -right_img_w  + 'px'
            });
            console.log('右边图片移动之后的:');
            console.log($(".sell-goods-right img").css('top'));
            console.log($(".sell-goods-right img").css('left'));
        });
    });
    $('.sell-goods-img').mouseout(function () {
        $(".sell-goods-right").hide();
        $('.sell-goods-right img').attr('src', '');
        $(".mengban").hide();
    });


    // 放大镜下选择图片
    $('.img-index a').click(function(){
        $(this).children().css('border', '1px solid #ff6700');
        $(this).siblings().children().css('border', '1px solid #616161');
         var img_src = $(this).children().attr('src');
         // console.log(img_path);
         // console.log($('.sell-goods-right img').attr('src'));
         $('.sell-goods-img img').attr('src', img_src);
    });
});