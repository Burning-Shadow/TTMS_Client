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
                    margin-left: 200px;
                    margin-top: 30px;
                }
                
                #box {
                    position: fixed;
                    top: 20%;
                    left: 6%;
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
                
                .control {
                    width: 77px;
                }
                
                #ticket {
                    width: 100px;
                }
            </style>
        </head>

        <body>
            <a href="/TTMS_2/views/user.jsp">添加用户信息</a>
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
            <table border="1" cellpadding="0" cellspacing="0" width="60%">
                <tr>
                    <th>用户名</th>
                    <th>身份</th>
                    <th>账号</th>
                    <th>密码</th>
                    <th>手机号</th>
                    <th id="ticket">已购票数</th>
                    <th class="control">操作</th>
                </tr>
                <c:forEach items="${userlist}" var="p">
                    <tr>
                        <td>${p.name}</td>
                        <td>${p.identity}</td>
                        <td>${p.username}</td>
                        <td>${p.password}</td>
                        <td>${p.phonenumber}</td>
                        <td>${p.ticketid}</td>
                        <td>
                            <a href="/TTMS_2/manager?cmd=edituser&id=${p.id}">编辑</a>
                            <a href="/TTMS_2/manager?cmd=deleteUser&id=${p.id}">删除</a>
                        </td>
                    </tr>
                </c:forEach>
            </table>
        </body>

        </html>