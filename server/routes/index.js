var express = require('express');
var router = express.Router();
//引入处理逻辑的js文件
var {getNavMenu} = require('../controller/getData')
var {getFooter} = require('../controller/getData')
var {getLinks} = require('../controller/getData')
var {getIndexPic} = require('../controller/getData')
var {getHotArticle} = require('../controller/getData')
var {getNewArticle} = require('../controller/getData')
var {getArticle} = require('../controller/getData')
var {getArticleTalk} = require('../controller/getData')
var {getArticles} = require('../controller/getData')
var {viewArticle} = require('../controller/getData')
const util = require('../util/common')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//获取footer显示内容
router.get('/getFooter', getFooter);

//获取菜单
router.get('/getNavMenu', getNavMenu);

//获取footer显示内容
router.get('/getFooter', getFooter);

//获取友情链接
router.get('/getLinks', getLinks);

//获取首页轮播图
router.get('/getIndexPic', getIndexPic);

//获取热点文章
router.get('/getHotArticle', getHotArticle);

//获取最新的文章列表
router.get('/getNewArticle', getNewArticle);

//获取文章的详情
router.get('/getArticle/:id', getArticle);

//获取文章评论
router.get('/getArticleTalk/:id', getArticleTalk);

//获取小标签或文章分类的内容
router.post('/getArticles', getArticles);

//记录文章浏览量
router.get('/viewArticle/:id', viewArticle);
module.exports = router;
