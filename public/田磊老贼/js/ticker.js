var Url = "http://192.168.1.134:8080/TTMS_2/"; //实验室
// var Url = "http://192.168.0.195:8080/TTMS_2/"; //fz131
// var Url = "http://192.168.1.161:8080/TTMS_2/"; //ff106
// 购票


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

        var String = ""; //拼接字符串

        var Li = document.createElement('li');
        var p = document.createElement('p');
        (function(Li, p) {
            span[j].onclick = function() {

                li.className = 'num';
                if (!this.className) {
                    this.className = 'choose';
                    p.innerHTML = li[i].index + '排' + this.index + '座';

                    var row = li[i].index;
                    var col = this.index;

                    String += "1," + row + "_" + col + "&";
                    $('.sub-content').text(String);
                    // console.log(String);


                    Li.appendChild(p);
                    ul.appendChild(Li);
                    num++;

                } else {
                    this.className = '';

                    var row = li[i].index;
                    var col = this.index;

                    String += "0," + row + "_" + col + "&";
                    $('.sub-content').text(String);
                    // console.log(String);


                    ul.removeChild(Li);

                    num--;
                }
                totalnum.innerHTML = num + '张';
                totalprice.innerHTML = num * 30 + '元';

            }
        })(Li, p)
    }

}

$(document).ready(function() {

});