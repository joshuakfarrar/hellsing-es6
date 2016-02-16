(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Greeter = function () {
  function Greeter() {
    _classCallCheck(this, Greeter);
  }

  _createClass(Greeter, null, [{
    key: 'greet',
    value: function greet(person) {
      return 'Hullo, ' + person.name + '!';
    }
  }]);

  return Greeter;
}();

exports.default = Greeter;

},{}],2:[function(require,module,exports){
'use strict';

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var _greeter = require('./greeter');

var _greeter2 = _interopRequireDefault(_greeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = new _person2.default({ name: 'Sent1nel' });
console.log(_greeter2.default.greet(p));

},{"./greeter":1,"./person":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(attrs) {
  _classCallCheck(this, Person);

  this.name = attrs.name;
};

exports.default = Person;

},{}]},{},[2]);
