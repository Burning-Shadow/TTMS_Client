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
                
                tbody {
                    width: 800px;
                }
                
                a {
                    text-decoration: none;
                    display: block;
                }
                
                a:hover {
                    color: red;
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
                    background: red;
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
                    background: red;
                }
                
                .si {
                    text-align: center;
                    line-height: 50px;
                }
                
                #submit {
                    margin-top: 23px;
                    margin-left: 3px;
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
                    <form action="/TTMS_2/manager?cmd=saveUser" method="post">
                        <font class="fo">昵称:</font> <input type="text" name="name">
                        <br><br>
                        <font class="fo">身份:&#8195;</font> <input type="text" name="identity">
                        <br><br>
                        <font class="fo">账号:&#8195;&#8195;</font> <input type="text" name="username">
                        <br><br>
                        <font class="fo">密码:&#8195;&#8195;</font> <input type="text" name="password">
                        <br></br>
                        <font class="fo">手机号:</font> <input type="text" name="phonenumber">
                        <br><br>
                        <font class="fo">已购票:&#8195;</font> <input type="text" name="ticketid">
                        <input type="hidden" value=null name="id" />
                        <br>
                        <input type="submit" id="submit" name="film" value="submit" style="width:100px;height: 40px;" class="inp">
                    </form>
                </div>
            </div>
        </body>

        </html>