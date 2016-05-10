System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, customAttribute, bindable, TypingAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      TypingAttribute = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(TypingAttribute, [{
          key: 'onStarted',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'onStopped',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'timeout',
          decorators: [bindable],
          initializer: function initializer() {
            return 500;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function TypingAttribute(element) {
          var _this = this;

          _classCallCheck(this, _TypingAttribute);

          _defineDecoratedPropertyDescriptor(this, 'onStarted', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onStopped', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'timeout', _instanceInitializers);

          this.timeoutProxyCallback = function () {
            _this._currentlyTyping = false;
            _this.onStopped(_this.element.value);
          };

          this.onKeyPressedCallback = function () {
            if (!_this._currentlyTyping) {
              _this._currentlyTyping = true;
              _this.onStarted(_this.element.value);
            }

            if (_this._timeoutHandler) {
              clearTimeout(_this._timeoutHandler);
            }

            _this._timeoutHandler = setTimeout(_this.timeoutProxyCallback, _this.timeout);
          };

          this.element = element;
          this._currentlyTyping = false;
          this._timeoutHandler = null;
        }

        _createDecoratedClass(TypingAttribute, [{
          key: 'bind',
          value: function bind() {
            if (!this.onStarted && !this.onStopped) {
              return;
            }
            this.element.onkeypress = this.onKeyPressedCallback;
          }
        }], null, _instanceInitializers);

        var _TypingAttribute = TypingAttribute;
        TypingAttribute = inject(Element)(TypingAttribute) || TypingAttribute;
        TypingAttribute = customAttribute('typing')(TypingAttribute) || TypingAttribute;
        return TypingAttribute;
      })();

      _export('TypingAttribute', TypingAttribute);
    }
  };
});