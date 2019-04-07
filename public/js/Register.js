// $('.inline-tip1').css("display", "inline-block"); //已被注册
// $('.reg-none').css("display", "inline-block"); //手机号码不能为空

//手机号
$('.mobile').blur(function() { //绑定失焦事件

    var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
    var mobile = $('.mobile').val();

    //与正则不匹配则显示警报信息
    if (!phoneReg.test(mobile)) {
        // console.log(mobile);
        // console.log('错啦');

        if (mobile == "") { //若手机字符串为空
            //初始化，全部隐藏            
            $('.reg-none').css("display", "none");
            $('.reg-rule').css("display", "none");
            $('inline-tips1').css("display", "none");

            $('.reg-none').css("display", "inline-block"); //手机号码不能为空
        } else {
            //初始化，全部隐藏
            $('.reg-none').css("display", "none");
            $('.reg-rule').css("display", "none");
            $('inline-tips1').css("display", "none");

            console.log(mobile);
            $('.reg-rule').css("display", "inline-block"); //手机号格式不正确
            //     console.log(1)
        }

    } else {
        //若匹配则发送ajax验证
        $.ajax({
            type: "POST",
            url: "/TTMS_2/login",
            data: {
                username: $('.mobile').val(),
                cmd: "getsimpleuser"
            },
            // dataType: "json",
            success: function(data, textStatus) {

                console.log(data);

                //未匹配
                if (data == 'null') {
                    //初始化，全部隐藏
                    $('.reg-none').css("display", "none");
                    $('.reg-rule').css("display", "none");
                    $('inline-tips1').css("display", "none");

                    //什么都不显示

                } else { //已经注册过
                    //初始化，全部隐藏
                    $('.reg-none').css("display", "none");
                    $('.reg-rule').css("display", "none");
                    $('inline-tips1').css("display", "none");

                    $('inline-tips1').css("display", "inline-block");
                }
            }

        });
    }
});

$('.user').blur(function() {
    var user = $('.user').val();

    if (user == "") {
        $('.user-none').css("display", "none");

        $('.user-none').css("display", "inline-block");
    }
})

//获取验证码按钮
$('.message').click(function() {
    $.ajax({
        type: "POST",
        url: "/TTMS_2/register",
        data: {
            cmd: "sendmessage",
            telephonenumber: $('.mobile').val()
        },
        // dataType: "json",
        success: function(data, textStatus) {

            //一个记时函数，三分钟之后才可以触发下一次点击事件
            // var timer = setTimeout

        }
    });
});

//短信验证码
$('.capcha').blur(function() { //绑定失焦事件

    var capcha = $('.capcha').val();

    //与正则不匹配则显示警报信息

    if (capcha == "") { //若验证码为空
        //初始化，全部隐藏       
        $('.reg-message').css("display", "none");
        $('inline-error').css("display", "none");

        $('.reg-message').css("display", "inline-block"); //短信验证码不能为空
    } else {
        $.ajax({
            type: "POST",
            url: "/TTMS_2/register",
            data: {
                cmd: "isOK",
                key: $('.capcha').val()
            },
            // dataType: "json",
            success: function(data, textStatus) {

                if (data == "OK") {
                    $('.reg-message').css("display", "none");
                    $('inline-error').css("display", "none");

                } else {
                    $('.reg-message').css("display", "none");
                    $('inline-error').css("display", "none");

                    $('.reg-err').css("display", "inline-block"); //验证码与后台数据不符
                }

            }
        })
    }
});



/*
//密码安全级别判定

$('.user-pass').focus(function() {
    if () { //若只有数字，字母或符号中的一种 
        $('.pimary').css('background-color', '#e5e5e5');
        $('.middle').css('background-color', '#e5e5e5');
        $('.senior').css('background-color', '#e5e5e5');

        $('.pimary').css('background-color', '#333');
    } else if () { //有三种中的两种
        $('.pimary').css('background-color', '#e5e5e5');
        $('.middle').css('background-color', '#e5e5e5');
        $('.senior').css('background-color', '#e5e5e5');

        $('.middle').css('background-color', 'yellow');
    } else if () { //三种都有
        $('.pimary').css('background-color', '#e5e5e5');
        $('.middle').css('background-color', '#e5e5e5');
        $('.senior').css('background-color', '#e5e5e5');

        $('.senior').css('background-color', 'green');
    }
})
*/

//验证密码
$('.user-pass1').blur(function() {
    var pass1 = $('.user-pass1').val();
    var pass1Reg = /\w{8,16}/;

    if (!pass1Reg.test(pass1)) { //若不符合规则

        // console.log(11111);
        if (pass1 == "") {
            //先清空
            $('.reg-pass-err').css("display", "none");
            $('.reg-pass-none').css("display", "none");

            $('.reg-pass-none').css("display", "inline-block");
        } else {
            $('.reg-pass-err').css("display", "none");
            $('.reg-pass-none').css("display", "none");

            $('.reg-pass-err').css("display", "inline-block");
        }
    }

})

//再次验证密码
$('.user-pass2').blur(function() {
    var pass1 = $('.user-pass1').val();
    var pass2 = $('.user-pass2').val();

    if (pass1 != pass2) { //若两次密码不同
        $('.reg-password2').css("display", "none");
        $('.reg-password2-err').css("display", "none");

        $('.reg-password2-err').css("display", "inline-block"); //两次密码不同
    } else if (pass2 == "") { //若第二次输入的密码为空
        $('.reg-password2').css("display", "none");
        $('.reg-password2-err').css("display", "none");

        $('.reg-password2').css("display", "inline-block"); //请再次输入密码
    }

});


//表单提交
$('.sub-btn').click(function() {


    $.ajax({
        type: "POST",
        url: "/TTMS_2/register",
        data: {
            name: $('.user').val(), //昵称
            password: $('.user-pass1').val(), //密码
            telephonenumber: $('.mobile').val(), //手机号----共用一个
            username: $('.mobile').val(), //手机号
            key: $('.capcha').val(), //验证码
            cmd: "resgister" //接口
        },
        asysnc: false, //同步操作即可
        // dataType: "json",
        success: function(data, textStatus) {
            if (data == "ERROR") { //若验证码不正确
                //返回本页
                alert("验证码错误，请重新填写信息");

            } else {
                //返回首页
                setTimeout(function() {
                    window.location.href = "index.html";
                }, 3000);
            }
        }
    })
});

/*
localStorage-----替代cookie
sessionStorage-----替代session
location.herf
document.cookie:"Sir=123";
*/

// console.log($('.mobile').val());