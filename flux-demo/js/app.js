/**
 * Flux示例启动文件
 * 
 */

var React = require('react');
var ReactDOM = require('react-dom');

var FluxApp = require('./components/FluxApp');

ReactDOM.render(
  <FluxApp />,
  document.getElementById('fluxapp')
);
