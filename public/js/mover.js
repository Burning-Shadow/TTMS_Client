/*Url设置*/
// var Url = "http://192.168.1.113:8080/TTMS_2/"; //实验室
// var Url = "http://192.168.0.195:8080/TTMS_2/"; //fz131
// var Url = "http://192.168.0.110:8080/TTMS_2/"; //ff106
// var Url = 'localhost:8080/';



//获取电影列表的海报url和fileName以及将要跳转页面的id
//跳转时我们只需要通过get方式通过url传递电影的唯一id即可使得后台获取信息，然后跳转到相应页面
//http://192.168.1.116:8080/TTMS_2/employee?id=1

function reloadFilms() {
    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: {
            number: 30,
            cmd: 'getAllsimplefilm'
        },
        dataType: "json",
        success: function(data, textStatus) {
            console.log(data);

            var movieTitle = $('.movie-title');
            var Img = $('.movie-img');
            var movieItem = $('.movie-item'); //获取movie-list栏里的movie-item

            for (var i = 0; i < 30; i++) {
                Img[i].src = data.filmlist[i].posterPath;
                movieTitle[i].innerHTML = data.filmlist[i].filmName;
                movieItem[i].setAttribute("name", data.filmlist[i].id); //成功写入name属性
                //movieItem.eq(i).attr("name", data.filmlist[i].id);            //这样应该也可以。我还没试呢
            }
        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    });
}

function getFilmId() {

    $('.movie-item').click(function() {
        var thisFilmName = event.target.parentNode.parentNode.getAttribute("name");
        // console.log(thisFilmName);
        localStorage.filmId = thisFilmName;
    });

}

$(document).ready(function() {
    //获取电影海报及名字
    reloadFilms();

    logIn();

    getFilmId();

    //验证用户是否已登陆(若localStorage中存在id则显示用户信息，否则显示登陆/注册)
    verifyStatus();

});