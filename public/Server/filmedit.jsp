<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="base.css"> .si { text-align: center; line-height: 50px; background-color: #393D49; color: white; }
            <style type="text/css">
                body {
                    color: white;
                    background-color: #23262E;
                }
                
                .si {
                    text-align: center;
                    line-height: 50px;
                    background-color: #393D49;
                    color: white;
                }
                
                a {
                    text-decoration: none;
                    display: block;
                }
                
                a:hover {
                    color: gray;
                }
                
                #center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                }
                
                .si {
                    margin-top: 20px;
                    width: 100px;
                    height: 50px;
                    color: black;
                }
                
                .si:hover {
                    background: gray;
                }
                
                #ma {
                    width: 400px;
                    height: 530px;
                    float: right;
                    position: relative;
                    margin-left: 50px;
                }
                
                .fo {
                    font-weight: bolder;
                    font-size: x-large;
                }
                
                .inp:hover {
                    background: gray;
                }
                
                .si {
                    text-align: center;
                    line-height: 50px;
                    text-align: center;
                    line-height: 50px;
                    background-color: #393D49;
                    color: white;
                }
            </style>
        </head>

        <body>
            <div id="center">
                <div style="float: left;margin-right: 50px;border-right: 1px solid black;">
                    <a href="/TTMS_2/manager?cmd=jspGetAllFilms" class="a1">
                        <div class="si">影片管理</div>
                    </a>
                    <a href="/TTMS_2/manager?cmd=getallsession" class="a1">
                        <div class="si">剧目管理</div>
                    </a>
                    <a href="/TTMS_2/manager?cmd=getAllUser" class="a1">
                        <div class="si">人员管理</div>
                    </a>
                    <a href="/TTMS_2/manager?cmd=getAllMovieHall" class="a1">
                        <div class="si">统计分析</div>
                    </a>
                </div>
                <div id="ma">
                    <form action="/TTMS_2/manager?cmd=updateFilm" method="post">
                        <font class="fo">电影名称:</font> <input type="text" name="filmName" value=${film.filmName}>
                        <br><br>
                        <font class="fo">电影价格:</font> <input type="text" name="filmPrice" value=${film.filmPrice}>
                        <br><br>
                        <font class="fo">导演:&#8195; &#8194; </font> <input type="text" name="director" value=${film.director}>
                        <br><br>
                        <font class="fo">编剧:&#8195; &#8194;</font> <input type="text" name="screenwriter" value=${film.screenwriter}>
                        <br><br>
                        <font class="fo">类型:&#8195; &#8194;</font> <input type="text" name="type" value=${film.type}>
                        <br><br>
                        <font class="fo">制片国家:</font> <input type="text" name="country" value=${film.country}>
                        <br><br>
                        <font class="fo">主演:&#8195; &#8194;</font> <input type="text" name="performer" value=${film.performer}>
                        <br><br>
                        <font class="fo">语言:&#8195; &#8194;</font> <input type="text" name="language" value=${film.language}>
                        <br><br>
                        <font class="fo">片长:&#8195; &#8194;</font> <input type="text" name="filmTime" value=${film.filmTime}>
                        <input type="hidden" value=${film.id} name="id" />
                        <input type="hidden" value=${film.trailerPath} name="trailerPath" />
                        <input type="hidden" value=${film.posterPath} name="posterPath" />
                        <input type="hidden" value=${film.state} name="state" />
                        <br><br>
                        <font class="fo">上映日期:&#32;</font>
                        <input type="date" value="2018-06-12" name="releasedate">
                        <br><br>
                        <font class="fo">简介:&#8195; &#8194;</font>
                        <input type="text" name="synopsis" value=${film.synopsis} style="height:70px">
                        <br><br>
                        <input type="submit" name="film" value="submit" style="width:100px;height: 40px;" class="inp">
                    </form>
                </div>
            </div>
        </body>

        </html>