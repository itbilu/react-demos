var React = require('react');
var ReactPropTypes = React.PropTypes;

var ResultItem = React.createClass({

  propTypes: {
   site: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    var site = this.props.site;

    return (
      <li key={site.id}>
        {site.name}-{site.domain}
      </li>
    );
  }
});

module.exports = ResultItem;