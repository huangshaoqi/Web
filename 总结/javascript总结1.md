## javascript基础
### 变量命名
- 严格区分大小写
- 数字字母下划线组成，不能以数字开头
- 不能使用系统保留的关键字
- 可以使用汉字，但是不推荐

### JavaScript使用
```
1. 写入行间
<button onclick="alert("OK")">点我</button>

2. 嵌入式
<script>
    var a =1;
    alert(a);
</script>

3. 外链式
<script scr="./../js/jquery-1.8.3.js"></script>
```
  
### 基本类型
```
Python类型: 数值 字符串 列表 元组 字典 集合 检测类型使用type()
JavaScript类型：数值(NaN) 字符串 对象（数组，null） 函数 布尔 undefined 检测类型使用 typeof()
```
### 类型转换
```
1.字符串--->数值
Number(str)：
只有一个非数字表示的字符就返回NaN。

parseInt(str):
从前往后读，一直读到非数字表示的字符时，就不在往后读，返回读到的结果，如果第一个字符就是非数字表示的字符直接返回NaN。

parseFloat(str):
从前往后读，一直读到非数字表示的字符时不包括第一个小数点，就不再往后读，返回读到的结果，如果第一个字符就是非数字表示的字符直接返回NaN。

isNaN(str):判断是不是 不是一个数值 返回true false

Boolean(value):把给定的值value转换成Boolean型，
注意:0 0.0 NaN '' null undefined 转成Boolean型都是false
```
### 运算符
```
1. 自增自减
i++; //自增
i--; //自减

2.字符串拼接
如果两边都是数值做加法运算
如果两边有一个是字符串 就做拼接，返回拼接好的新字符串

3.全等===：不仅判断两边的值是否相同，还要判断类型
全不等!==
不全等!=
var res1 = 1 === "1";
var res2 = 1 !== "1";
var res3 = 1 == "1";
var res4 = 1 != "1";
console.log(res1, res2, res3, res4); 输出:false true true false

3.三元运算符
语法格式:判断条件 ? 真区间 : 假区间
var res= 1 < 0 ? '真的':'假的';
```
### 流程控制
```
if语句:

if(条件){
    满足条件后执行此区间代码;
}else{
    不满足条件后执行此区间代码;
}；

if(条件1){
    满足条件1后执行此区间代码;
}else if(条件2){
    不满足条件2后执行此区间代码;
}else{
    不满足条件1和2后执行此区间代码;
}；

switch语句:
switch(n):
    case x:
        代码1;
        break;
    case y:
        代码2;
        break;
    case z:
        代码3；
        break;
    default:
        代码4；
```

### 循环控制
```
while循环
while(条件){
    满足条件执行此区间代码，循环判断后执行
};

for循环
for(var 1=0;i<10;i++>){
    console.log(i);
};

for in 遍历
var obj = {name:"张三",age:18,phone:"138"};
for(i in obj){
    document.write(obj[i]);
};
```
### 元素操作
```
1.当数据加载完后，调动指定的函数
window.onload = function(){
    代码；
};

2.设置样式:设置的都是行间样式
var odiv = document.getElementById("box");
odiv.style.width = "200px";
odiv.style.backgroundColor = "red";

2.文本操作
//会覆盖原来的内容
odiv.innerHTML = "<h1>标题</h1>";
//获取文本
odiv.innerText

3.表单操作
var Inp = document.getElementById("inp")；
Inp.value = "表单里的值"; //设置表单里的值
```
### 定时器使用
- 定时器属于异步操作，不会阻塞主程序执行
- 单次定时器setTimeout()等待指定时间后执行一次指定的代码
```
单次定时器
vat T = setTimeout(function(){
    console.log("ok");
},3000);

多次定时器
var a =1;
var I = setInterval(function(){
    a++;
    console.log(a);
},2000);

清除定时器clearTimeout(定时器表示符)    clearInterval(定时器表示符)
clearTimeout(T);

//执行3次停止 6000/2000=3
setTimeout(function(){
    clearInterval(I);
},6000)
```
### 函数使用
```
1.使用function关键字定义 优先级较高 在任何位置都可以调用
func();
function func(){
    alter('ok');
};

2.在表达式当中声明，只能在函数定义后进行调用
var func1 = function(){
    alter("ok");
};
func1();

3.函数参数（形参 实参）
3.1 定义了形参，调用时不传实参不会报错，形参是undefined
3.2 调用时传一个实参，按照位置传参，多余的形参为undefined
3.3 调用时传多个实参，按照位置传参，多余的实参省略
3.4 可以用书内部通过arguments这个属性获取所有的实参,arguments[第几个参数,从1开始]
3.5 在罪行的浏览器当中支持默认值参数，低版浏览器不支持
例：
function func(a,b,c){
    console.log(a,b);
    console.log(arguments[1]);
};
func(1,2,3,4); 
//输出:1 2
//     1

4.全局变量与局部变量
4.1 全局变量：在函数外部定义的变量和在函数内部不使用var定义的变量，在任何位置都能访问
4.2 局部变量：在函数内部使用var定义的变量，只能在函数内部去访问
4.3 函数内部声明了和全局变量同名的局部变量，在函数内部全局变量的作用域发生了变化
var a =1;
function func(){
    var a = 0;
    console.log(a);
    a = 2;
    console.log(a);
}
console.log(a);
func();
console.log(a);
//输出 1 0 2 1
```
### 对象
```
1. 使用内置的Object()实例化对象
var obj = new Object();

2. 设置成员属性和方法
//当键名存在变量的时候，使用[]
//当键名是字符串的时候，使用[]
obj.name = "aaa";
obj.say = function(){alert("OK");}

3. 访问成员属性和方法
console.log(obj.name);
console.log(obj.say());

4. 直接定义对象
var obj1 = {name:"abc",age:100,say:function(){alert("OK");}};

5. 使用自定义的构造函数 实例化对象
//this 代表当前对象，谁调用this,this就代表谁
function Obj(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){return "\n信息：" + this.name + " " + this.age;);};
};
var Obj1 = new Ojb("abc",10);
console.log(Obj1.name,Obj1.age,Obj1.say());
var Obj2 = new Ojb("efg",20);
console.log(Obj2.name,Obj2.age,Obj2.say());
```
### 类型检测
```
var s = '123';
console.log(s.constructor); //输出:function String() { … }
var obj = {name:"abc",age:12};
console.log(obj.constructor); //输出：function Object() { … }
```
### 数组对象
```
1.使用系统提供的构造函数来实例数组对象
var arr = new Array(1,2,3,4);

2.获取数组的长度
arr.length

3.可以给任意索引添加值，中间没有元素以undefined进行补位

4.从后面操作
push() 从数组的最后插入新的元素 不限制个数和类型
pop() 只删除数组最后一个元素，一次只能删除一个

5.从前面操作
unshift()从数组的最前面插入新的元素，不限制个数和类型
shift() 只删除数组最前面一个元素，一次只能删除一个

6.splice()具有返回值，返回值是由删除的元素组成的新数组
第一个参数 从哪个索引位置开始删
第二个参数 删除的个数
第三个参数 替换的元素
```
### 数学对象
```
1. 四舍五入
Math.round(5.21);

2.获取最小值
Math.min(1,2,3,4,3,2);

3.获取绝对值
Math.abs(23);

4.向下取整
Math.floor(1.9);

5.向上取整
Math.ceil(1.1);

6.幂运算
Math.pow(2,3);

7.开方运算
Math.sqrt(9);

8.返回0~1之间的随机数
Math.random();
//整数的随机数
function rand(m,n){
    return Math.floor(Math.random() * (n-m + 1)) + m;
}
rand(4,10);
```
### 正则表达式
```
var reg = new RegExp('a');
var reg = /186/;    // 推荐使用简转义字符  \w  \W  \d  \D  \s  \S  
var reg = /\w/;  // 代表单个数字字母_
var reg = /\W/;     // 单个的非数字字母下滑线
var reg = /\d/;     // 单个的数字
var reg = /\D/;      // 单个的非数字
var reg = /\s/;      // 匹配单个空白符 
var reg = /\S/;    // 单个非空白符

元字符 . * + ? {} [] () | ^ $
var reg = /./;   // 任意以为字符 除了换行符
var reg = /a*/;     // 匹配0次或多次
var reg = /b+/;     // 匹配1次或者多次 最少匹配到一个
var reg = /a+?/;      // 禁止贪婪 尽可能少的取匹配
var reg = /a{2,4}/;    //限制匹配次数的范围
var reg = /[a-zA-Z0-9_]/; // 限制匹配字符类型的范围 一次只匹配一个字符
reg = /.+@.+\.(com|cn|org)/;  // | 或  配置()使用 多个条件
reg = /^b.+b$/;  // ^ 限制开头 $限制结尾

test 返回布尔值 如果存在返回true 不存在返回false
var res = reg.test(str);

exec 匹配到信息 返回一个数组 包含匹配到的数据 如果没有匹配到返回null
var res2 = reg.exec(str);

字符串提供的正则匹配方法
var res3 = str.match(reg);
```
### 表单验证
```
<form action="" id="for">
    用户名: <input type="text" name="username" placeholder="请输入用户名">
    <span id="title"></span>
    <br>
    密码: <input type="password" name="pwd">
    <br>
    <button>提交</button>
</form>

// 获取form的元素对象 通过input的name属性的值获取对应的input元素对象
var For=document.getElementById('for').username;
var tit = document.getElementById('title');

// onclick 单击
// onfocus 获取焦点
// onblur  失去焦点

// 绑定获取焦点事件 当用户获取焦点时自动调用函数
For.onfocus=function(){
    console.log('获取了焦点');
    // 给提示信息
    tit.innerHTML='请输入由字母开头,6-8位的用户名';
    tit.style.color="#c4c4c4";
};
// 绑定失去焦点事件 当用户失去焦点时自动调用函数
For.onblur=function(){
    console.log('失去了焦点');
    // 获取用户输入的值
    var Val = For.value;
    console.log(Val);
    // 写判断规则
    var reg = /^[a-zA-Z]\w{5,7}$/;
    var Flag = reg.test(Val);
    // 判断是否匹配成功,如果成功 给出绿色提示 失败给出红色提示
    if(Flag){
        tit.innerHTML='恭喜你,用户名格式正确';
        tit.style.color="#0f0";
    }else{
        tit.innerHTML='不好意思,用户名格式不正确,请查证后重新输入';
        tit.style.color="#f00";
    }
}
```
### Jquery选择器
```
基本选择器
var Img = document.getElementById('img');
Img.style.border=""

Jquery选择器
$('#img').css('border','1px solid green');
$('.w').css('background','green');
$('li').css("background","pink");
$('#footer img').css('border','1px solid red');
获取第一个和最后一个元素
$('#images li:first').css('background','red');
$('li:last').css('background','red');
*** 根据索引获取指定元素 索引从0开始
$('#images li:eq(1)').css('background','red');
$('#images li').eq(2).css('background','red');
根据内容获取元素对象
$('li:contains(国)').css('background','red');
属性选择器
$('li[name=y]').css('background','green');获取所有的子元素
$('#images').children().css('background','#369');
找第一个子元素和最后一个子元素
$('#images li:first-child').css('background','#557');
$('#images li:last-child').css('background','#557');
$('#images li:nth-child(1)').css('background','#557');
查找上一个同级元素和下一同级元素
$('#images .h').prev().css('background','green');
$('#images .h').next().css('background','green');
***查找除了自己以外的所有的同级元素
$('.h').siblings().css('background','blue');
***根据子元素查找父元素
$('.h').parent().css('background','red');
****找先辈元素 不传参数获取素有的先辈元素 传参可以指定查找指定的先辈元素
$('.h').parents('#all,#images').css('border','1px solid red');
查找指定的子元素 必须指定元素 不指定无效
$('html').find('#images').css('border','red 1px solid');
```
### Jquery操作
```
样式操作:
// 绑定单击事件
$('.item').click(function(){
    // 单独设置样式 传字符串
    $('.item').css('width','200px');
    $('.item').css('height','200px');
    // 一次设置多个样式 传对象进去 双拼词去掉- 第二个单词首字母大写
    $('.item').css({width:'200px',height:'200px',backgroundColor:'red'});

    // 获取css样式 返回一个带单位的字符串
    var bor = $('.item').css('width');
    console.log(bor);
    
    // 插入文本 html() text()
    $('.item').html('<h1>今天周五啦</h1>');
    $('.item').text('<h1>明天星期啦</h1>');
    console.log($('.item').html());
    console.log($('.item').text());
})

类名操作:
// 单击添加类名 addClass removeClass
$('div').click(function(){
    // 追加类名
    $('div').addClass('item2 item3');
    // 删除类名 不传参数默认移除所有的类名 可以根据参数移除指定的类名
    $('div').removeClass('item1');
    // 切换类名 如果指定的类名已经存在做删除 如果不存在就做添加
    $('div').toggleClass('item2 item3');
})

属性操作：
function cli(){
        // 如果属性已经存在就做修改  
        // 如果不存在就做添加
        // 修改属性
         $('a').attr('href','http://www.mi.com');
        // 添加属性
        $('a').attr('title','百度');
        // 一次添加多个属性
        $('a').attr({href:'www.mi.com',id:'item'});
        // 删除id的属性  不指定参数不生效
        $('a').removeAttr('href');
        // 获取属性的值
        console.log($('a').attr('href'));
    }

    // 使用attr 也可操作clas属性 但是会覆盖原来的值===>重新赋值
    function Div(){
        $('div').attr('class','item2');
    }

表单操作：
// val() 用对表单的value值的操作
		$('input[name=username]').val('樊志刚');
		console.log($('input[name=username]').val());

选项卡片段：
// 给表题添加单击事件
$('.title li').click(function(){
    // $(this) 代表当前触发单击事件的元素  谁触发的事件$(this)就代表谁
    $(this).addClass('active').siblings().removeClass('active');
        // 1.给当前单击的元素添加 active属性
        // $(this).addClass('active');
        // 2.获取除了自己以外的兄弟元素
        // var els = $(this).siblings();
        // 3.将所有的同级元素的active删除  不管有还是没有都要删除
        // els.removeClass('active');
    // 获取当前单击的标题的索引    标题的索引和内容的索引一一对应 拿到标题的索引去关联内容
    var I = $(this).index();
    // 根据标题的索引找对应的内容
    $('.content li').eq(I).addClass('active1').siblings().removeClass('active1');
})

位置尺寸：
// 相对于文档的偏移位置 返回一个对象包含 top 和 left 属性
var DP = $('.item').offset();
console.log(DP.top);
// 获取相对于父元素的偏移位置 获取定位属性的值  返回对象 包含 top left属性
var PP=$('.inner').position();
console.log(PP);
// 获取文档的滚动距离
var ST = $(document).scrollTop();
var SL = $(document).scrollLeft();
// console.log(ST,SL);
// 获取元素的宽高  不传参数获取尺寸 传参是设置
var EW = $('.item').width(400);
var EH = $('.item').height(400);
console.log(EW,EH);
// 获取文档的宽高
var DW = $(document).width();
var DH = $(document).height();
console.log(DW,DH);
// 获取窗口的宽高
var WW = $(window).width();
var WH = $(window).height();
console.log(WW,WH);

事件绑定：
// 1.基本绑定 元素对象点 事件方法()
$('.item1').click(function(){
	$(this).css('background','pink');
});
$('.item1').dblclick(function(){
	$(this).css('background','yellow'
})
//2.方法绑定 on bind
$('.item1').on('click dblclick',function(){
	$(this).css('background','pink');
	console.log(1);
})
//一次绑定多个事件对应的方法，传字典
$('.item1').bind({
	mouseover:function(){
		console.log('我进来了');
		$(this).css('background','red');
	},
	mouseout:function(){
		console.log('我出来了');
		$(this).css('background','pink'
	}
})

// 3.动态绑定 live()
    $('.item1').live('click',function(){
    	$(this).css('background','red');
    })
    // 格式 $('父元素').on('事件类型','绑定事件的元素',回调函数)
    $('body').on('click','.item1',function(){
        console.log('1');
    })

    // 创建元素
    var el = $('<div class="item1">2</div>');
    // 将元素插入到页面
    el.appendTo($('body'));

// 解除事件绑定 不传参数默认解除所有事件 可以移除指定的事件
$('.item1').unbind('dblclick');
```
### Jquery事件
```
// 事件的触发
$('div').eq(0).click(function(){
	    alert('我是广告');
})
$('div').eq(0).trigger('click');
// 鼠标常用事件
// click dblclick
// 鼠标移入 mouseover() 
$('div').mouseover(function(){
     $('div').css('width','400px');
});
// 移出事件 mouseout()
$('div').mouseout(function(){
     $('div').css('width','600px');
});
// 移动事件 mousemove()
$('div').mousemove(function(){
     console.log('我动了');
     var i = 1;
     var W = $('div').width();
     var res = W+i;
     $('div').css('width',res+'px');
})
// 悬浮事件 hover()
$('div').hover(function(){
	    console.log('我进来了');
 },function(){
	    console.log('我出来了');
     })
// 鼠标按下 mousedown()
 $('div').mousedown(function(){
 	    console.log('我按下了');
 })
// 鼠标抬起事件 mouseup()
$('div').mouseup(function(){
	    console.log('我抬起了');
})

// 事件对象 event
$('div').mousedown(function(e){
    e.clientX
    e.clientY   鼠标相对于浏览器窗口的位置
    e.pageX
    e.pageY     鼠标相对于文档的位置
    console.log(e);
})
```