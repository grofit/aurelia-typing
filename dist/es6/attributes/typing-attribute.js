import {inject, customAttribute, bindable} from 'aurelia-framework';

@customAttribute('typing')
@inject(Element)
export class TypingAttribute {
  @bindable onStarted;
  @bindable onStopped;
  @bindable timeout = 500;

  constructor(element) {
    this.element = element;
    this._currentlyTyping = false;
    this._timeoutHandler = null;
  }

  bind() {
    if(!this.onStarted && !this.onStopped) { return; }
    this.element.onkeypress = this.onKeyPressedCallback;
  }

  timeoutProxyCallback = () => {
    this._currentlyTyping = false;
    this.onStopped(this.element.value);
  };

  onKeyPressedCallback = () => {
    if(!this._currentlyTyping) {
      this._currentlyTyping = true;
      this.onStarted(this.element.value);
    }

    if(this._timeoutHandler)
    { clearTimeout(this._timeoutHandler); }

    this._timeoutHandler = setTimeout(this.timeoutProxyCallback, this.timeout);
  }
}
