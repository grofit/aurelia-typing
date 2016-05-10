# Aurelia-Typing

A simple attribute for aurelia to allow you to listen for callbacks when a user starts or stops typing.

## Installing

`jspm install github:grofit/aurelia-typing`

Then register the plugin

`aurelia.user.plugin("aurelia-typing")`

## Example

A simple example of checking when a user has started and stopped typing:
```
<input type="text" id="some-input-element" typing="on-started.bind: startedTyping; on-stopped.bind: stoppedTyping; timeout: 1500;" /> 

// some vm you are using
export class MyCurrentVM
{
    startedTyping(currentTextValue) { 
    // do something when started
    };
    
    stoppedTyping(currentTextValue) {
    // do something when stopped
    };
}
```

The available options for this binding are:

* **on-started** - The callback for when typing begins
* **on-stopped** - The callback for when typing ends
* **timeout** - The amount of time to wait for a user to stop tippy tappying before declaring the typing finished (default is: 3000 milliseconds)