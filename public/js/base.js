//遮罩层和登陆框的处理

function showLog() {
    $('#Log').css('display', 'block');
    $('#Shade').css('display', 'block');
}


//点击遮罩层或cancel或×时关闭将遮罩层和Log的diaplay属性设置为none
function closeLog() {
    $('#Log').css('display', 'none');
    $('#Shade').css('display', 'none');
}

$('#Shade').bind("click", function() {
    closeLog();
});

$('.Log-cancel').bind("click", function() {
    closeLog();
});

$('.clsbtn').bind("click", function() {
    closeLog();
});

/*************************************************************************************************************************/

//验证用户是否已登陆
//verify：验证
function verifyStatus() {
    //获取已经登陆用户的id
    var userId = localStorage.getItem('id');

    // console.log("userId = " + userId);

    if (userId == null) { //若用户id为空（没有用户登陆）获取的是null或值，并非空字符串""
        //全部隐藏
        $('.right_1').css('display', 'none');
        $('.right_2').css('display', 'none');

        //显示登陆/注册选项
        $('.right_1').css('display', 'block');
    } else { //localStorage中有用户信息
        //全部隐藏
        $('.right_1').css('display', 'none');
        $('.right_2').css('display', 'none');

        //向right_2中写入用户信息
        $('.userId').text(localStorage.getItem('name'));

        //显示用户界面
        $('.right_2').css('display', 'block');

    }
}

/*************************************************************************************************************************/

//注销
$('.off-line').click(
    function logOut() {

        //获取localStorage中的id。若存在则表示已登录，否则为未登录
        var userId = localStorage.getItem('id');

        if (userId) { //用户为已登陆状态
            //删除session中的信息
            localStorage.removeItem('id');
            localStorage.removeItem('identity');
            localStorage.removeItem('name');

            // sessionStorage.clear(); //清空
            //由于里边可能会存储电影相关信息，所以我们暂且不能使用清空功能

            //全部隐藏
            $('.right_1').css('display', 'none');
            $('.right_2').css('display', 'none');

            //显示登陆/注册选项
            $('.right_1').css('display', 'block');
        } else { //若用户为未登录状态
            //全部隐藏
            $('.right_1').css('display', 'none');
            $('.right_2').css('display', 'none');

            //显示用户名&&头像
            $('.userId').text(localStorage.getItem('name'));
            $('.right_2').css('display', 'block');
        }
    }
)



/*************************************************************************************************************************/

//登陆验证ajax



// $("#submit").click(function(event) {
//     event.preventDefault();
// });


//登陆时发生的一系列事件
//失焦事件判断用户名是否存在
//提交后写入localStorage，同时将
function logIn() {
    var password = $('#password').val();

    $('#submit').click(function() {
        console.log($('#username').val() + $('#password').val());
        $.ajax({
            type: "POST",
            url: "/TTMS_2/login",
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            // contentType: 'application/json',
            dataType: "JSON",
            success: function(data, textStatus) {
                // console.log(data);

                if (data == '登录失败') {
                    alert("用户名与密码不符");
                } else {
                    // console.log("登陆成功");

                    if (data.identity == "manager") {

                        window.location.href = "/TTMS_2/manager?cmd=jspGetAllFilms";

                    } else {
                        // console.log("显示头像");
                        $('.right_1').css("display", "none");
                        $('.right_2').css("display", "none");

                        $('.userId').text(localStorage.getItem('name'));
                        $('.right_2').css("display", "block");

                        //关闭登陆框以及遮罩层
                        closeLog();
                        // console.log("将信息（identity,name和id）存储到localStorage中");
                        localStorage.name = data.name;
                        localStorage.id = data.id
                        localStorage.identity = data.identity;
                        $('.userId').text(localStorage.getItem('name'));
                        $('.off-line').css('display', 'block');
                    }

                }
            },
            error: (err) => {
                console.log(err);
            }

        })

    })
}

//动画效果
$('.right_2 span span').click(function() {
    $('.off-line').animate({
        height: 'toggle'
    })
})