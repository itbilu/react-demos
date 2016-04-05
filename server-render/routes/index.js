var express = require('express');
var router = express.Router();
var React = require('react');
var ReacDOMServer = require('react-dom/server');
// 服务端引入MyComponent组件
var MyComponent =  React.createFactory(require('../components/MyComponent'));

/* 主页 */
router.get('/', function(req, res) {
  var num = Math.random();
  // 服务端渲染HTML
  var html = ReacDOMServer.renderToString(<MyComponent number={num} />);
  // 向页面传递渲染后HTML字符串和num（props）
  res.render('random-props', {html:html, num:num});
});


module.exports = router;
