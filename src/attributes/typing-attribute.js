import {inject, customAttribute, bindable } from 'aurelia-framework';

@customAttribute('typing')
@inject(Element)
export class FilesAttribute {
  @bindable onStarted;
  @bindable onStopped;
  @bindable timeout;

  currentlyTyping = false;
  timeoutHandler = null;

  constructor(element) {
    this.element = element;
  }

  bind() {
    if(!this.onStated && !this.onStopped) { return; }
    this.element.onkeypress = this.onKeyPressedCallback;
  }

  timeoutProxyCallback() {
    this.currentlyTyping = false;
    this.onStopped(this.element.value);
  };

  onKeyPressedCallback() {
    var timeoutHandler;

    if(!this.currentlyTyping) {
      this.currentlyTyping = true;
      this.onStated(this.element.value);
    }

    if(this.timeoutHandler)
    { clearTimeout(this.timeoutHandler); }

    this.timeoutHandler = setTimeout(timeoutProxyCallback, timeout);
  }
}
