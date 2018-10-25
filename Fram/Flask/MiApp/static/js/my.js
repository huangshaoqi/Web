//导航栏里的下载app效果,二维码显示
$('.download').mouseover(function () {
    // console.log("aa");
    //鼠标移进.download标签时显示
    $('.download .box').css("display", "block");
});
$('.download').mouseout(function () {
    //鼠标移出.download标签时显示
    $('.download .box').css("display", "none");
    //鼠标移进.box时显示
    $('.download .box').mouseover(function () {
        console.log("bb");
        $('.download .box').css("display", "block");
    });
    //鼠标移出.box时显示
    $('.download .box').mouseout(function () {
        console.log("bb");
        $('.download .box').css("display", "none");
    });
});
