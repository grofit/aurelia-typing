import {inject, customAttribute, bindable } from 'aurelia-framework';

@customAttribute('typing')
@inject(Element)
export class TypingAttribute {
  @bindable onStarted;
  @bindable onStopped;
  @bindable timeout;

  currentlyTyping = false;
  timeoutHandler = null;

  constructor(element) {
    this.element = element;
  }

  bind() {
    console.log("THIS", this);
    if(!this.onStarted && !this.onStopped) { return; }
    this.element.onkeypress = this.onKeyPressedCallback;
  }

  timeoutProxyCallback = () => {
    this.currentlyTyping = false;
    this.onStopped(this.element.value);
  };

  onKeyPressedCallback = () => {
    if(!this.currentlyTyping) {
      this.currentlyTyping = true;
      this.onStarted(this.element.value);
    }

    if(this.timeoutHandler)
    { clearTimeout(this.timeoutHandler); }

    this.timeoutHandler = setTimeout(this.timeoutProxyCallback, this.timeout);
  }
}
