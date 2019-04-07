/* 轮播图JavaScript部分代码 */
var lineB = $(".carousel .line a"),
    index = 0,
    imgArry = ['list1', 'list2', 'list3', 'list4', 'list5', 'list6'];

function lineColor() { //设置lineButton颜色
    //获取所有的lineB.获取当前的index.给它设置一个css值.  其兄弟元素不变色
    $(lineB).eq(index).css("background", "#45c17c").siblings().css("background", "#ccc");
}
lineColor(); //js载入时就执行一次


function nextPic() { //往下翻页
    imgArry.unshift(imgArry[5]); //将最后一个元素复制到第一个
    imgArry.pop(); //将最后一个元素删除
    $(".carousel .imglist .UL li").each(function(i, e) { //each:数组从头遍历到尾再给每个数组遍历一个事件
        $(e).removeClass().addClass(imgArry[i]); //删除所有原有的类名，按照新的类名顺序设置
    });
    index++;

    //判断当前点到哪一个
    if (index > 5) {
        index = 0;
    }
    lineColor();
}
//此时应该点击当前的“list3”。让浏览器获取document来告诉我们当前的list3是谁
//事件委托
$(document).on("click", ".list3", function() {
    nextPic();
}, false);

/*位置其实是通过类名来决定的，故我们只需要改变类名所对应的图片即可改变最上边的图片*/

function prePic() { //往上翻页

    //先将最后一个放在第一个之前，而后将最后一个删掉。以此来完成index的改变

    imgArry.push(imgArry[0]); //将第一个元素添加到最后一个
    imgArry.shift(); //删除第一个
    $(".carousel .imglist .UL li").each(function(i, e) {
        $(e).removeClass().addClass(imgArry[i]); //删除原有的类名，按照新的类名顺序设置
    });
    index--;
    if (index < 0) {
        index = 5;
    }
    lineColor();
}


$(document).on("click", ".list1", function() {
    prePic();
});


//翻页函数（点击lineButton翻页）
$(lineB).each(function() {
    $(this).click(function() {
        var nowIndex = $(this).index(); //获取当前的索引值
        var offset = nowIndex - index; //获取翻页次数
        if (offset == 0) { //若所点击凸点对应当前图片什么都 不干
            return;
        } else if (offset > 0) { //当 nowindex>0 时向下翻

            //翻几次就操作几次数组
            for (var i = 0; i < offset; i++) {
                imgArry.unshift(imgArry[5]);
                imgArry.pop();
            }

            $(".carousel .imglist .UL li").each(function(i, e) {
                $(e).removeClass().addClass(imgArry[i]); //删除原有类名，按照新的类名顺序设置
            });
            index = nowIndex;
            lineColor();
        } else if (offset < 0) {
            for (var i = 0; i > offset; i--) {
                imgArry.push(imgArry[0]);
                imgArry.shift();
            }
            $(".carousel .imglist .UL li").each(function(i, e) {
                $(e).removeClass().addClass(imgArry[i]);
            });
            index = nowIndex;
            lineColor();
        }
    })
})
$(document).on("click", ".list3", function() {
    nextPic();
})
$(document).on("click", "list1", function() {
    prePic();
})


//设置自动轮播效果
timer = setInterval(nextPic, 3500); //每3000ms向下翻页一次

//当鼠标放至轮播图之上时停止（去掉setInterval效果）
$(".carousel").mouseover(function() {
        clearInterval(timer);
    })
    //鼠标移开时继续转动
$(".carousel").mouseleave(function() {
    timer = setInterval(nextPic, 3500);
})

/**************************************************************************************************************/
/**************************************************************************************************************/


//获取顶部Video的url链接
// function reloadVideo() {
//     $.ajax({
//         type: 'POST',
//         url: '/employee',
//         data: {
//             number: 6,
//             cmd: "getFilmVideo"
//         }, //index.html需要6个宣传片的链接
//         async: true, //或false,是否异步
//         dataType: "json",
//         success: function(data, textStatus) {
//             // console.log(data);

//             var Img = $('.Img'); //获取图片
//             var Url = $('.Url'); //获取链接

//             // console.log(Img);

//             for (var i = 0; i < 8; i++) {
//                 Img[i].src = data.filmlist[i].posterPath;
//                 // console.log(data.filmlist[i].filmName);
//                 movieTitle[i].url = data.filmlist[i].url;
//             }
//         },
//         error: function(XMLHttpRequest, txtStatus, errorThrown) {
//             console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
//         }
//     });
// }



//获取左边列表图片url及名字
function reloadMovie() {
    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: {
            number: 8,
            cmd: "getAllsimplefilm"
        }, //index.html中只需要前6张图片
        async: true, //或false,是否异步
        dataType: "json",
        success: function(data, textStatus) {
            // console.log(data);

            var movieTitle = $('.movie-title'); //获取标题栏
            var Img = $('.Img'); //获取图片
            var movieItem = $('.movie-item'); //获取movie-list栏里的movie-item

            // console.log(Object.prototype.toString.call([]));


            for (var i = 0; i < 8; i++) {
                Img[i].src = data.filmlist[i].posterPath;
                movieTitle[i].innerHTML = data.filmlist[i].filmName;
                movieItem[i].setAttribute("name", data.filmlist[i].id); //这里不知道jq抽什么疯了，总之用attr浏览器识别不了，用原生就可以
            }

        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    });
}


//获取排行榜id
function reloadRank() {
    $.ajax({
        type: 'POST',
        url: '/TTMS_2/employee',
        data: {
            number: 10,
            cmd: "getAllsimplefilm"
        }, //index.html中需要排名前10的电影信息
        dataType: "json",
        async: true, //或false,是否异步
        success: function(data, textStatus) {
            var rankTitle = $('.rank-title');

            // $('#frist-span1').text(); //设置排名第一的影片名称
            $('#frist-span1').innerText = data.filmlist[0].filmName;
            // console.log("第一个标签的内容：" + $('#frist-span1').val());

            // rankFilmId[0].setAttribute("name", data.filmlist[i].id);
            $('#frist-span2').text('3262.01万');
            // console.log(rankTitle);
            for (var i = 0; i < 9; i++) {
                rankTitle[i].innerText = data.filmlist[i + 1].filmName;
            }

        },
        error: function(XMLHttpRequest, txtStatus, errorThrown) {
            console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
        }
    });
}


/**
 *   设置定时执行
 *   setTimeout(表达式,延时时间)在执行时,是在载入后延迟指定时间后,去执行一次表达式,记住,次数是一次 
 *   setInterval(表达式,交互时间)则不一样,它从载入后,每隔指定的时间就执行一次表达式 
 */
// setInterval('reloadMovie()', 60000);     //每60秒刷新一次Movie显示的数据
// setInterval('reloadRank()', 60000);       //每60秒刷新一次Rank栏显示的数据


//页面跳转

//绑定点击事件
function turnPage() {
    var movieItem = $('.movie-item'); //获取movie-list（左边）中的movie-item

    for (var i = 0; i < movieItem.length; i++) {
        movieItem[i].click(function() {

            console.log($(this).name.val());

            $.ajax({
                type: 'POST',
                url: '/TTMS_2/employee',
                data: {
                    id: $(this).name.val(), //获取当前电影的唯一标识id
                    cmd: "getAllFilmByid"
                }, //index.html中需要排名前10的电影信息
                dataType: "json",
                async: true, //或false,是否异步
                success: function(data, textStatus) {
                    //设置cookie（页面跳转跨域了）

                    //设置完毕之后就什么都不需要管了，直接跳转到新页面，新页面随便发送一个get请求

                },
                error: function(XMLHttpRequest, txtStatus, errorThrown) {
                    console.log(XMLHttpRequest + "<br>" + txtStatus + "<br>" + errorThrown);
                }
            })
        });
    }

}

function getFilmId() {

    $('.movie-item').click(function() {
        var thisFilmName = event.target.parentNode.parentNode.getAttribute("name");
        localStorage.filmId = thisFilmName;
    });

    $('.Rank').click(function() {
        var thisFilmName = event.target; //.getAttribute("name")
        // console.log(thisFilmName);
        // localStorage.filmId = thisFilmName; //写入localStorage
    });

}

$(document).ready(function() {

    reloadMovie(); //获取左边列表图片url及名字
    reloadRank(); //获取排行榜id
    getFilmId();

    logIn();

    //验证用户是否已登陆
    verifyStatus();

    // 登出
    // $('.off-line').click(logOut())


});