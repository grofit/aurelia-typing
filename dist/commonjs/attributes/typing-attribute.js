'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var TypingAttribute = (function () {
  var _instanceInitializers = {};

  function TypingAttribute(element) {
    var _this = this;

    _classCallCheck(this, _TypingAttribute);

    _defineDecoratedPropertyDescriptor(this, 'onStarted', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onStopped', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'timeout', _instanceInitializers);

    this.currentlyTyping = false;
    this.timeoutHandler = null;

    this.timeoutProxyCallback = function () {
      _this.currentlyTyping = false;
      _this.onStopped(_this.element.value);
    };

    this.onKeyPressedCallback = function () {
      if (!_this.currentlyTyping) {
        _this.currentlyTyping = true;
        _this.onStarted(_this.element.value);
      }

      if (_this.timeoutHandler) {
        clearTimeout(_this.timeoutHandler);
      }

      _this.timeoutHandler = setTimeout(_this.timeoutProxyCallback, _this.timeout);
    };

    this.element = element;
  }

  var _TypingAttribute = TypingAttribute;

  _createDecoratedClass(_TypingAttribute, [{
    key: 'bind',
    value: function bind() {
      console.log('THIS', this);
      if (!this.onStarted && !this.onStopped) {
        return;
      }
      this.element.onkeypress = this.onKeyPressedCallback;
    }
  }, {
    key: 'onStarted',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'onStopped',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'timeout',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  TypingAttribute = (0, _aureliaFramework.inject)(Element)(TypingAttribute) || TypingAttribute;
  TypingAttribute = (0, _aureliaFramework.customAttribute)('typing')(TypingAttribute) || TypingAttribute;
  return TypingAttribute;
})();

exports.TypingAttribute = TypingAttribute;