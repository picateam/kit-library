(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (global.index = global.index || {}, global.index.umd = global.index.umd || {}, global.index.umd.js = factory()));
}(this, function () { 'use strict';

    var main = {
      init: function init() {
        return new Promise(function (resolve, reject) {
          resolve(123);
        }); // return '123';
      }
    };

    return main;

}));
