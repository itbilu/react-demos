/**
 * 这个组件是顶层的 "Controller-View"
 * 它会监听 FluxStore 的'change'事件，并将新数据传递给子组件
 */

var React = require('react');
var MainSection = require('./MainSection');
var Footer = require('./Footer');
var FluxStore = require('../stores/FluxStore');

/**
 * 从FluxStore中获取当关的状态
 */
function getFluxState() {
  return {
    results: FluxStore.getResults(),
    keyword: FluxStore.getKeyword()
  };
}

var FluxApp = React.createClass({

  getInitialState: function() {
    return getFluxState();
  },

  componentDidMount: function() {
    FluxStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FluxStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <MainSection
          results={this.state.results} 
          keyword={this.state.keyword}
        />
        <Footer />
      </div>
    );
  },

  /**
   * FluxStore的'change'事件处理
   */
  _onChange: function() {
    this.setState(getFluxState());
  }

});

module.exports = FluxApp;
