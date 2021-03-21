var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//更改只用引入这个中间件
var {checkAPP, checkAdmin, checkUser} = require('./util/middleware');

//引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
//创建实例
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设置允许跨域访问该服务
//设置跨域访问
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//使用中间件，checkApp这个中间件所有路由都应该使用
app.use('/', checkAPP, indexRouter);
app.use('/users',checkAPP, usersRouter);
app.use('/admin',[checkAPP/*, checkUser, checkAdmin*/], adminRouter);

module.exports = app;
