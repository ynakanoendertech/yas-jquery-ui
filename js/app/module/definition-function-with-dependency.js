"use strict";

define(['module/definition-function'], function(DefFunc) {

    var defFunc = DefFunc;

    defFunc.age = '30';
    defFunc.increaseAge = function() {
        defFunc.age++;
    };

    return defFunc;
});