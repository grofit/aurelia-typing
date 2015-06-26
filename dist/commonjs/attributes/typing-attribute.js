'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _handlersFileHandlerJs = require('../handlers/file-handler.js');

var FilesAttribute = (function () {
  var _instanceInitializers = {};

  function FilesAttribute(element) {
    _classCallCheck(this, _FilesAttribute);

    _defineDecoratedPropertyDescriptor(this, 'onStarted', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'onStopped', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'timeout', _instanceInitializers);

    this.currentlyTyping = false;
    this.timeoutHandler = null;

    this.element = element;
  }

  var _FilesAttribute = FilesAttribute;

  _createDecoratedClass(_FilesAttribute, [{
    key: 'bind',
    value: function bind() {
      if (!this.onStated && !this.onStopped) {
        return;
      }
      this.element.onkeypress = this.onKeyPressedCallback;
    }
  }, {
    key: 'timeoutProxyCallback',
    value: function timeoutProxyCallback() {
      this.currentlyTyping = false;
      this.onStopped(this.element.value);
    }
  }, {
    key: 'onKeyPressedCallback',
    value: function onKeyPressedCallback() {
      var timeoutHandler;

      if (!this.currentlyTyping) {
        this.currentlyTyping = true;
        this.onStated(this.element.value);
      }

      if (this.timeoutHandler) {
        clearTimeout(this.timeoutHandler);
      }

      this.timeoutHandler = setTimeout(timeoutProxyCallback, timeout);
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

  FilesAttribute = (0, _aureliaFramework.inject)(Element)(FilesAttribute) || FilesAttribute;
  FilesAttribute = (0, _aureliaFramework.customAttribute)('typing')(FilesAttribute) || FilesAttribute;
  return FilesAttribute;
})();

exports.FilesAttribute = FilesAttribute;