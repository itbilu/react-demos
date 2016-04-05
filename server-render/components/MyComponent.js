/* 一个客户端、服务端通用的React组件 */
var React = require("react");

var MyComponent = React.createClass({
  render: function() {
    return (<h2>{this.props.number}</h2>);
  }
});

module.exports = MyComponent;