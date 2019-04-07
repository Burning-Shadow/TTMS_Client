// 购票

var rows = [];
var cols = [];

var li = document.querySelectorAll('#seat .seat_left_right .ul li');

var seat_location = document.querySelectorAll('.num p');
// var ul = document.getElementsByClassName('areat_seat_2');
var ul = document.querySelector('.areat_seat_2');
var totalnum = document.querySelector('.PS .totalnum');
var totalprice = document.querySelector('.PP .totalprice');


for (let i = 0, len = li.length; i < len; i++) {
    let span = li[i].querySelectorAll('span');
    li[i].index = i + 1;
    for (let j = 0; j < span.length; j++) {
        span[j].index = j + 1;
        var num = 0;
        var Li = document.createElement('li');
        var p = document.createElement('p');
        (function(Li, p) {
            span[j].onclick = function() {

                li.className = 'num';

                if (!this.className) {
                    this.className = 'choose';
                    p.innerHTML = li[i].index + '排' + this.index + '座';

                    //将所选座位的行列存入数组中
                    rows.push(li[i].index);
                    cols.push(this.index);

                    Li.appendChild(p);
                    ul.appendChild(Li);
                    num++;
                } else if (this.className == 'choose') {
                    this.className = '';

                    ul.removeChild(Li);

                    num--;

                    console.log('li[i].index = ' + li[i].index);
                    console.log('this.index = ' + this.index);

                    //将数组中已选的座位去除掉
                    var indexX = rows.indexOf(li[i].index);
                    var indexY = cols.indexOf(this.index);
                    if (indexX > 0 && indexY > 0) {
                        rows.splice(indexX, 1);
                        cols.splice(indexY, 1);
                    }
                }
                totalnum.innerHTML = num + '张';
                totalprice.innerHTML = num * 45 + '元';

                console.log('rows = ' + rows);
                console.log('cols = ' + cols);

            }
        })(Li, p)
    }

}

// console.log('rows = ' + rows);
// console.log('cols = ' + cols);

function reloadFilmDetail() {
    reloadHallSeat();

    $('.movie-title').text("所选电影Id为" + localStorage.getItem('filmId'));
    $('.hallName1').text(localStorage.getItem('moviehallid'));
    $('.hallName2').text(localStorage.getItem('moviehallid'));
    $('.movieStartTime').text(localStorage.getItem('movieStartTime'));
}

var filmId = sessionStorage.getItem('filmId');
var movieHallId = sessionStorage.getItem('moviehallid');
var movieStartTime = sessionStorage.getItem('movieStartTime');



//预加载已选座位
// function reloadHallSeat() {
//     $.ajax({
//         type: 'POST',
//         url: '/TTMS_2/employee',
//         data: {
//             filmid: filmId, //电影id
//             moviehallid: movieHallId, //影厅id
//             starttime: movieStartTime, //开始时间
//             cmd: "getseats"
//         },
//         dataType: "json",
//         async: true, //或false,是否异步
//         success: function(data, textStatus) {
//             console.log(data);

//             if (data.list == []) { //若data.list为空则代表该场电影还没有人选座
//                 ;
//             } else {
//                 //找出对应座位的标号
//                 //(li[x], span[y]).addClass('sell_out')
//                 // span.addClass('sell_out')
//             }

//         },
//         error: function(XMLHttpRequest, txtStatus, errorThrown) {
//             console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
//         }
//     })
// }




$('#sub_ticket').click(() => {

    // 提交的数组列表（需要动态创建，现在的话咱们是测试假数据）
    var List = [{
        id: localStorage.id,
        x: 1,
        y: 1,
        state: 1,
        MovieHallId: localStorage.moviehallid, //影厅id
        filmid: localStorage.filmId, //电影id
        startTime: localStorage.movieStartTime //开始时间
    }, {
        id: localStorage.id,
        x: 5,
        y: 5,
        state: 1,
        MovieHallId: localStorage.moviehallid, //影厅id
        filmid: localStorage.filmId, //电影id
        startTime: localStorage.movieStartTime //开始时间
    }, {
        id: localStorage.id,
        x: 5,
        y: 6,
        state: 1,
        MovieHallId: localStorage.moviehallid, //影厅id
        filmid: localStorage.filmId, //电影id
        startTime: localStorage.movieStartTime //开始时间
    }, {
        id: localStorage.id,
        x: 7,
        y: 6,
        state: 1,
        MovieHallId: localStorage.moviehallid, //影厅id
        filmid: localStorage.filmId, //电影id
        startTime: localStorage.movieStartTime //开始时间
    }];

    console.log(List);


    //若选定的座位数为空则不进行跳转
    // if (0) {
    //     alert('请选择您要购买的座位');
    // } else {

    // }



    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: JSON.stringify({
            'list': List,
            'cmd': "sellTicket"
        }),
        dataType: "json",
        async: true, //或false,是否异步
        contentType: 'application/json',
        success: function(data, textStatus) {
            console.log(data);

            // 若购买成功则跳转页面
            if (data.status == 1) {
                window.location.href = '/order.html'
            } else {
                console.log('购票失败，请重试')
            }
        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    })


})

$(document).ready(function() {

    logIn();

    //验证用户是否已登陆(若localStorage中存在id则显示用户信息，否则显示登陆/注册)
    verifyStatus();

    //预加载影厅信息
    reloadFilmDetail();

});