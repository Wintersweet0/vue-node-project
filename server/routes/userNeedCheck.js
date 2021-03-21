var express = require('express');
var router = express.Router();
//引入处理逻辑的js文件
var {articleTalk} = require('../controller/userNeedCheck')
var {getUserInfo} = require('../controller/userNeedCheck')
var {changeUserInfo} = require('../controller/userNeedCheck')
var {sendMail} = require('../controller/userNeedCheck')
var {getMails} = require('../controller/userNeedCheck')
var {getUserMail} = require('../controller/userNeedCheck')
var {getArticleType} = require('../controller/userNeedCheck')
var {articleLike} = require('../controller/userNeedCheck')
var {articleCollection} = require('../controller/userNeedCheck')
var {getCollection} = require('../controller/userNeedCheck')

//添加文章评论
router.post('/article/talk', articleTalk);

//获取用户资料
router.get('/info/:username', getUserInfo);

//修改用户资料
router.post('/changeInfo', changeUserInfo);

//发送私信
router.post('/mail/:username', sendMail);

//获取私信列表
router.get('mailsGet', getMails);

//根据私信id获取私信详情
router.get('/mailsGet/:id', getUserMail);

//获取文章分类
router.get('/getArticleType', getArticleType);

//文章点赞和踩
router.post('/like/:id/:like',articleLike);

//文章收藏功能
router.get('/save/:id',articleCollection);

//获取收藏文章列表
router.get('/saveList',getCollection);
module.exports = router;