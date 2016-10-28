"use strict";

var NonDefine = (function() {

    'use strict';

    function NonDefine(name) {
        NonDefine.prototype.init(name);
    }

    NonDefine.prototype = {

        name: null,

        init: function(name) {
            this.name = name;
        }
    };

    return NonDefine;

}());
