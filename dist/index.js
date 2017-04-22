'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bottomNav = require('./bottom-nav');

var _bottomNav2 = _interopRequireDefault(_bottomNav);

var _itemNav = require('./item-nav');

var _itemNav2 = _interopRequireDefault(_itemNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_bottomNav2.default, _itemNav2.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) return;
  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

exports.default = install;