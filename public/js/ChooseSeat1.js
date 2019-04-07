var avaliable = document.getElementsByClassName('aval');
// 选座
var seatlist = document.getElementById('seatlist');
var list = seatlist.getElementsByTagName('li');
var totalfee = document.getElementById('totalfee');
var ticketnum = document.getElementById('ticketnum');
var total;
var num = 0;
var main = getE('main');
var information = getE('information');
var buyticket = getE('buyticket');
var confirmsubmit = getE('confirm-submit');
var kg = getE('kg'); //得到是几排几座
var url = window.location.href;
console.log(url);
var m = url.indexOf('?');

var querystr = url.substr(m + 1);
var arr1 = querystr.split('&');
var k = arr1[1].indexOf('=');
var userid = arr1[1].substr(k + 1);
console.log(userid);


// 大模块

function creE(ele) {
    return document.createElement(ele);
}

function getE(ele) {
    return document.getElementById(ele);
}

function createXHR(name) {
    if (window.XMLHttpRequest) {
        name = new XMLHttpRequest();
    } else {
        name = new ActiveXObject("MicroSoft.XMLHttp");
    }
    return name;
}
// 添加事件
function addEvent(ele, type, callbackFunction) {
    if (ele.addEventListener) {
        ele.addEventListener(type, callbackFunction, false);
    } else {
        ele.attachEvent('on' + type, callbackFunction);
    }
}

function Sbyclass(ele) {
    return document.getElementsByClassName(ele);
}

function addClass() {
    for (let i = 0; i < list.length; i++) {
        var spanlist = list[i].getElementsByTagName('span');
        for (let j = 0; j < spanlist.length; j++) {
            spanlist[j].setAttribute('x', i + 1);
            spanlist[j].setAttribute('y', j + 1);
        }
    }
} //
addClass();

function addSeat() {
    var seatlist = getE('seatlist');
    addEvent(seatlist, 'click', function(event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName == 'SPAN') {
            var seatx = target.getAttribute('x');
            var seaty = target.getAttribute('y');
            if (target.classList.contains('selected')) {
                target.classList.remove('selected');
                var seatselect = document.getElementById(seatx + '' + seaty);
                kg.removeChild(seatselect);
                num--;
                total = num * 34;
                totalfee.innerHTML = total + '元';
                ticketnum.innerHTML = num + '张';
            } else {
                var seat = creE('span');
                kg.appendChild(seat);
                seat.id = seatx + '-' + seaty;
                target.classList.add('selected');
                seat.id = seatx + '' + seaty;
                seat.innerHTML = seatx + '排' + seaty + '座';
                num++;
                total = num * 34;
                totalfee.innerHTML = total + '元';
                ticketnum.innerHTML = num + '张';
            }
        } else if (target.nodeName == 'BUTTON') {
            var moviefee = totalfee.innerHTML; //总费用
            var movieseat = ticketnum.innerHTML; //座位
            var conspan = getE('con-span');
            main.style.display = "none";
            information.style.display = "none";
            buyticket.style.display = "none";
            confirmsubmit.style.display = "block";
            var confirmname = getE('confirm-ticket-name');
            var confirmhall = getE('confirm-ticket-hall');
            var confirmorder = getE('confirm-ticket-time');
            var confirmmoney = getE('confirm-ticket-money');
            var confirmrelmoney = getE('confirm-ticket-rel-money');
            var confirmlist = kg.getElementsByTagName('span');
            var confirmid = getE('confirm-id');
            for (var i = 0; i < confirmlist.length; i++) {
                var confirmspan = creE('span');
                confirmspan.innerHTML = confirmlist[i].innerHTML;
                conspan.appendChild(confirmspan);
            }
            confirmname.innerHTML = getE('ticket-name').innerHTML;
            confirmhall.innerHTML = getE('ticket-moviehall').innerHTML;
            confirmrelmoney.innerHTML = moviefee;
            confirmmoney.innerHTML = moviefee;
            confirmid.innerHTML = getE('ticket-id').innerHTML;
            confirmorder.innerHTML = getE('ticket-starttime').innerHTML;
        }
    });

}
addSeat();
var confirmpay = getE('confirm-pay');
addEvent(confirmpay, 'click', function() {
    var xmlhttp;
    xmlhttp = createXHR(xmlhttp);
    var filmid = getE('confirm-id').innerHTML;
    var MovieHallId = getE('confirm-ticket-hall').innerHTML;
    var startTime = getE('confirm-ticket-time').innerHTML;
    var ConfirmSeatList = getE('con-span').getElementsByTagName('span');
    var list1 = [];
    // var userid = JSON.stringify(userid);
    // var userid = userid;

    var cmd = "sellTicket";
    for (var i = 0; i < ConfirmSeatList.length; i++) {
        var xx = ConfirmSeatList[i].innerHTML;
        list1[i] = {
            x: parseInt(xx[0]),
            y: parseInt(xx.substring(2, xx.length - 1)),
            state: 1,
            id: null,
            filmid: filmid,
            MovieHallId: MovieHallId,
            startTime: startTime
        };
    }
    var list = JSON.stringify(list1);
    xmlhttp.open("post", ip + 'employee', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send('list=' + list + "&cmd=" + cmd + "&userid=" + userid);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status >= 200 && xmlhttp.status < 300 ||
                xmlhttp.status == 304) {
                console.log("success");
            }
        }
    }
});