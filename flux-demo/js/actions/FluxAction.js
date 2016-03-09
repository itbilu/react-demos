var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxConstants = require('../constants/FluxConstants');

var FluxAction = {

  /**
   * @param  {string} text
   */
  search: function(text) {
    AppDispatcher.dispatch({
      actionType: FluxConstants.FLXU_SEARCH,
      text: text
    });
  }

};

module.exports = FluxAction;