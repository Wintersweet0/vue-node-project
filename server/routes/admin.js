var express = require('express')
var router = express.Router();

var {setArticle} = require('../controller/admin')
var {showArticle} = require('../controller/admin')
var {setArticleType} = require('../controller/admin')
var {getAllUser} = require('../controller/admin')
var {stopLogin} = require('../controller/admin')
var {setIndexPic} = require('../controller/admin')
var {setNavMenu} = require('../controller/admin')
var {setFooter} = require('../controller/admin')
var {setLinks} = require('../controller/admin')

//文章添加和修改
router.post('/setArticle', setArticle)

//文章发布和删除
router.post('/showArticle', showArticle)

//添加和修改分类
router.post('/setArticleType', setArticleType)

//获取所有的用户
router.get('/getAllUser', getAllUser)

//封停用户
router.get('/stopLogin/:id', stopLogin)

//修改首页轮播图片
router.post('/setIndexPic', setIndexPic)

//修改导航菜单
router.post('/changeNav', setNavMenu)

//修改底部内容
router.post('/setFooter', setFooter)

//修改友情链接
router.post('/setLinks', setLinks)
module.exports = router