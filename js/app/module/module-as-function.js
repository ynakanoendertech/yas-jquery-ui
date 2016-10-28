"use strict";

define(['module/simple'], function(Simple) {


    return function SimpleWrapper() {
        this.simple = Simple;
        return this;
    }
});