var express = require('express');
var router = express.Router();
//引入逻辑处理的js文件
var {userLogin, userRegister} = require('../controller/user')
var {checkUser} = require('../util/middleware')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userRegister);
router.post('/login', userLogin);
router.use('/user', checkUser, require('./userNeedCheck'));

module.exports = router;
