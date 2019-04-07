/*Url设置*/
// var Url = "http://192.168.1.113:8080/TTMS_2/"; //实验室
// var Url = "http://192.168.0.195:8080/TTMS_2/"; //fz131
// var Url = "http://192.168.0.110:8080/TTMS_2/"; //ff106
// var Url = 'localhost:8080/';



function getUserDetail() {
    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: {
            id: localStorage.getItem('id'),
            cmd: 'getUserSchedule'
        },
        dataType: "json",
        success: function(data, textStatus) {
            console.log(data);

            $('.username').text(localStorage.getItem('name'));

            if (data != null) { //若返回数据为空

                $('.no-tkt-content').css('display', 'none');
                $('.tkt-content').css('display', 'none');

                $('.tkt-content').css('display', 'block');

                // $('.filmName').text(data.session[i].filmName);
                // $('.hallId').text(data.session[i].moviehallid);
                // $('.startTime').text(data.session[i].starttime);
                // $('.timeLength').text(data.session[i].timelength);

                for (var i = 0; i < data.session.length; i++) { //影片个数
                    $('.movie-schedule').append($('<li class="schedule"><div class="inner-content"><div class="filmName">' + data.session[i].filmname + '</div><div class="detail"><span class="hallId">' + data.session[i].moviehallname + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="startTime">' + data.session[i].starttime + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="timeLength">' + data.session[i].movieLength + '</span>min</div></div></li>'))
                }


            } else {
                $('.no-tkt-content').css('display', 'none');
                $('.tkt-content').css('display', 'none');

                $('.no-tkt-content').css('display', 'block');
            }



        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    });
}


$(document).ready(function() {

    getUserDetail()

});