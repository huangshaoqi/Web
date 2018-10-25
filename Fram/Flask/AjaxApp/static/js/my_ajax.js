function loadXMLDoc() {
    //XMLHttpRequest对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //支持所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）
        xmlhttp = new XMLHttpRequest();
    } else {
        //支持旧时IE5，IE6浏览器
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    };
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // document.getElementById('content').innerText = xmlhttp.responseText;

            console.log(xmlhttp.responseText);
            //清空table里的数据
            $('tbody').empty();
            //将查出来的数据插入table里
            $('tbody').html(xmlhttp.responseText);
        };
    };
    //发送请求
    xmlhttp.open("GET", "/get_data", true);
    xmlhttp.send();

};