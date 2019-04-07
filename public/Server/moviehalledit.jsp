<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="base.css">
            <style type="text/css">
                body {
                    color: white;
                    background-color: #23262E;
                }
                
                .si {}
                
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
                    text-align: center;
                    line-height: 50px;
                    background-color: #393D49;
                    color: white;
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
                        <div class="si">影厅管理</div>
                    </a>
                </div>
                <div id="ma">
                    <form action="/TTMS_2/manager?cmd=updatemoviehall" method="post">
                        <font class="fo">影厅名:</font> <input type="text" name="name" value=${moviehall.name}>
                        <br><br>
                        <font class="fo">最大行数:&#8195;&#8195;</font> <input type="text" name="xMax" value=${moviehall.xMax}>
                        <br></br>
                        <font class="fo">最大列数:</font> <input type="text" name="yMax" value=${moviehall.yMax}>
                        <br><br>
                        <input type="hidden" value=${moviehall.id} name="id" />
                        <input type="hidden" value=${moviehall.id} name="seat" />
                        <input type="hidden" value=${moviehall.id} name="numberRemaining" />
                        <br>
                        <input type="submit" id="submit" name="film" value="submit" style="width:100px;height: 40px;" class="inp">
                    </form>
                </div>
            </div>
        </body>

        </html>