'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxConstants = require('../constants/FluxConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _results = {};
var _keyword = '';

// 模似一个搜索源
const _source = [
  {
    name:'IT笔录',
    domain: 'itbilu.com'
  },
  {
    name:'一介布衣',
    domain: 'yijibuyi.com'
  },
  {
    name:'老聂的小站',
    domain: 'niefengjun.cn'
  }
];

/**
 * 实现搜索功能
 * @param  {string} 搜索的内容
 */
function search(text) {
  _keyword = text;
  _source.forEach(function(item){
    if(item.name.indexOf(text)>-1){
      var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
      _results[id] = {
        id: id,
        name:item.name,
        domain: item.domain
      };
    }
  });
}

var FluxStore = assign({}, EventEmitter.prototype, {
  /**
   * 获取Flux 搜索的结果集
   * @return {object}
   */
  getResults: function() {
    return _results;
  },

  /**
   * 获取Flux 搜索的关键字
   * @return {string}
   */
  getKeyword: function() {
    return _keyword;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// 注册回调处理函数
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case FluxConstants.FLXU_SEARCH:
      text = action.text.trim();
      if (text !== '') {
        search(text);
        FluxStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = FluxStore;