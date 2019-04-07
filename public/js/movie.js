// var Url = "http://192.168.1.113:8080/TTMS_2/"; //实验室
// var Url = "http://192.168.0.195:8080/TTMS_2/"; //fz131
// var Url = "http://192.168.0.110:8080/TTMS_2/"; //ff106
// var Url = 'localhost:8080/';



/*************************************************************************************************************************/
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
//登陆验证ajax

$(document).ready(function() {
    var password = $('#password').val();
    // console.log(password + "--------");
    $('#username').blur(function() {
        $.ajax({
            type: "POST",
            url: "/TTMS_2/login",
            data: {
                username: $('#username').val()
            },
            // dataType: "json",
            success: function(data, textStatus) {
                //未匹配
                if (data == '该账号可用') {
                    alert("该账号可用");
                } else if (data == '该账号不存在') {
                    alert("该账号不存在");
                }
            }

        });
    })
    $('#submit').click(function() {
        // console.log($('username').val() + $('password').val());
        $.ajax({
            type: "POST",
            url: "/TTMS_2/login",
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function(data, textStatus) {
                console.log(data);
                if (data == '用户名与密码不符') {
                    console.log("用户名与密码不符");
                } else {
                    console.log("登陆成功");
                    closeLog();
                    console.log("显示头像");
                }
            },
            error: function() {
                alert(data);
            }

        })
        console.log("username: " +
            $('#username').val() +
            "password: " +
            $('#password').val())
    })
})

/********************************************************************************************/

function reloadFilms() {
    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: {
            id: localStorage.getItem('filmId'),
            cmd: 'getAllFilmByid'
        },
        dataType: "json",
        success: function(data, textStatus) {
            console.log(data);

            $('.inner-container img').attr('src', data.film.posterPath); //海报

            $('.filmName').text(data.film.filmName);
            $('.director').text(data.film.director);
            $('.type').text(data.film.type);
            $('.country').text(data.film.country);
            $('.filmTime').text(data.film.filmTime);
            $('releasedate').text(data.film.releasedate);

            $('.synopsis').text(data.film.synopsis); //简介

            //演出计划（movie-schedule）
            //好像得自己建立一系列东西
            for (var i = 0; i < data.session.length; i++) { //影片个数
                $('.movie-schedule').append($('<li class="schedule" name="' + data.session[i].moviehallid + '"><div class="session"><div class="session-info"><div class="session-top"><span class="hall-id">' + data.session[i].moviehallid + '</span>号厅（免费提供3D眼镜）</div><div class="session-bottom">放映时间-<span class="starttime">' + data.session[i].starttime + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="timelength">' + data.session[i].timelength + '</span>min</div></div><div class="buy-btn"><a href="ticker.html" name="' + data.session[i].starttime + '">选座购票</a></div></div></li>'))
            }

            getHallId(); //由于是异步加载且我们需要用到选座购票按钮中的数据，所以我们需要将getHallId存储至

        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    });
}


/*******************************************************************************************/

function getHallId() {
    $('.buy-btn a').click(function(event) {

        var thisClick = event.target;
        var thisHallId = thisClick.parentNode.parentNode.parentNode.getAttribute('name');
        // console.log("开始时间为" + thisStartTime);
        var thisStartTime = thisClick.getAttribute('name'); //.getAttribute("name")
        // console.log("放映厅为" + thisHallId);

        //写入localStorage
        localStorage.moviehallid = thisHallId;
        localStorage.movieStartTime = thisStartTime;
    });
}



/********************************************************************************************/

$(document).ready(function() {
    //获取电影海报,名字,简介，时长
    reloadFilms();
    //获取电影厅id


    logIn();

    //验证用户是否已登陆(若localStorage中存在id则显示用户信息，否则显示登陆/注册)
    verifyStatus();

});