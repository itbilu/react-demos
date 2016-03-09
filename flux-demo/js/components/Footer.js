var React = require('react');
var ReactPropTypes = React.PropTypes;

var Footer = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <footer id="info">
        <p>Created by <a href="http://itbilu.com">IT笔录</a></p>
        <p>原文：<a href="http://itbilu.com/javascript/react/VJfBAqvng.html">React 数据流与Flux框架</a></p>
      </footer>
    );
  }
});

module.exports = Footer;