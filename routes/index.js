var express = require('express');
var router = express.Router();
var Controller = require('../app/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// First: 异步执行这两个逻辑，但是其实不合理，因为这两个是没有先后顺序的。看一下执行时间
router.get('/first', Controller.first);

// Second: 两个逻辑没有先后顺序。看一下执行时间
router.get('/second', Controller.second);

// Third: 模拟css样式文件加载，2s
router.get('/third', Controller.third);

// fourth：先加载头部head,客户端解析静态文件，服务端接着解析section部分
router.get('/fourth', Controller.fourth);

router.get('/bigpipe', Controller.bigpipe);

module.exports = router;
