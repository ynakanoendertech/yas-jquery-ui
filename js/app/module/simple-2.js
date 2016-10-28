"use strict";

define(['module'] , function(module) {

    return {
        color: module.config().max_size,
        size: module.config().base_color
    };
});