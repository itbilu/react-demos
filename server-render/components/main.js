/* 客户端通过这个文件操作React组件和DOM */
var React = require('react');
var ReactDOM = require('react-dom');
// 客户端引入MyComponent组件
var MyComponent = require('./MyComponent');

var mountNode = document.getElementById('example');
// 使用服务端传递初始值重新渲染组件
ReactDOM.render(<MyComponent number={initProps.num} />, mountNode);
