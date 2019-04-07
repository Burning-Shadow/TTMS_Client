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
                    <form action="/TTMS_2/manager?cmd=savesession">
                        <font class="fo">电影名称：</font>
                        <select name='filmid' style='width:150'>
        	<c:forEach items="${film}" var="f">
        		<option  value=${f.id}>${f.filmName}</option>
        	</c:forEach>
		</select>
                        <br><br>
                        <font class="fo">影厅名称：</font>
                        <select name='moviehallid' style='width:150'>
        	<c:forEach items="${moviehall}" var="m">
        		<option  value=${m.id}>${m.name}</option>
        	</c:forEach>
		</select>
                        <br><br>
                        <font class="fo">时长：&#8195; &#8194; </font> <input type="text" name="timelength">
                        <br><br>
                        <font class="fo">上映日期： &#32;</font>
                        <input type="date" value="2018-06-12" name="startdate">
                        <input type="time" value="4:53" name="starttime">
                        <br><br>
                        <input type="hidden" value=null name="id" />
                        <input type="hidden" value="savesession" name="cmd" />
                        <input type="submit" name="film" value="submit" style="width:100px;height: 40px;" class="inp">
                    </form>
                </div>
            </div>
        </body>

        </html>