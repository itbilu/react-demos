
var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxAction = require('../actions/FluxAction');
var SearchInput = require('./SearchInput');
var ResultItem = require('./ResultItem');

var MainSection = React.createClass({

  propTypes: {
    results: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    var results = this.props.results;
    var keyword = this.props.keyword; 
    var items = [];

    for (var key in results) {
      items.push(<ResultItem site={results[key]} />);
    }

    var hint;
    if(keyword.length>0) {
      hint = <h4>共找到{items.length}个“{keyword}”的搜索结果</h4>
    } else {
      hint = <label htmlFor="keyword">请输入您要搜索的内容</label>
    }

    return (
      <section>
        <SearchInput placeholder="请输入关键字" id="keyword" className="form-control" onSearch={this._onSearch} />
        {hint}
        <ul>{items}</ul>
      </section>
    );
  },
  /**
   * SearchInput组件事件处理器
   * @param {string} text
   */
  _onSearch: function(text) {
    if (text.trim()){
      FluxAction.search(text);
    }

  }
});

module.exports = MainSection;