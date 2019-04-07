<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>货品显示列表</title>
            <style>
                body {
                    color: white;
                    background-color: #23262E;
                }
                
                a {
                    text-decoration: none;
                }
                
                table {
                    max-width: 800px;
                    margin-left: 300px;
                    margin-top: 30px;
                }
                
                #box {
                    position: fixed;
                    top: 20%;
                    left: 10%;
                    float: left;
                    border-right: 1px solid black;
                    font-size: 18px;
                    text-align: center;
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
                    color: white;
                }
                
                .startTime {
                    width: 100px;
                }
                
                .control {
                    width: 77px;
                }
                
                .filmId {
                    width: 40px;
                    text-align: center;
                }
                
                .hallId {
                    width: 50px;
                    text-align: center;
                }
                
                .timeLength {
                    width: 50px;
                }
            </style>
        </head>

        <body>
            <a href="/TTMS_2/manager?cmd=session">添加演出计划</a>
            <div id="box">
                <a href="/TTMS_2/manager?cmd=jspGetAllFilms" class="a1">
                    <div class="si">影片管理</div>
                </a>
                <a href="/TTMS_2/manager?cmd=getallsession" class="a1">
                    <div class="si">剧目管理</div>
                </a>
                <a href="/TTMS_2/manager?cmd=getAllUser" class="a1">
                    <div class="si">人员管理</div>
                </a>
                <a href="/TTMS_2/manager?cmd=getAllMovieHall" class="a1">
                    <div class="si">影厅管理</div>
                </a>
            </div>
            <table border="1" cellpadding="0" cellspacing="0" width="90%">
                <tr>
                    <th class="filmId">电影</th>
                    <th class="hallId">影厅</th>
                    <th class="startTime">开始时间</th>
                    <th class="timeLength">时长</th>
                    <th class="control">操作</th>
                </tr>
                <c:forEach items="${list}" var="p">
                    <tr>
                        <td>${p.filmid}</td>
                        <td>${p.moviehallid}</td>
                        <td>${p.starttime}</td>
                        <td>${p.timelength}</td>
                        <td>
                            <a href="/TTMS_2/manager?cmd=updatesession&id=${p.id}">编辑</a>
                            <a href="/TTMS_2/manager?cmd=deletesession&id=${p.id}">删除</a>
                        </td>
                    </tr>
                </c:forEach>
            </table>
        </body>

        </html>