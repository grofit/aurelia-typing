System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalizeResources("./attributes/typing-attribute");
    }

    return {
        setters: [],
        execute: function () {}
    };
});