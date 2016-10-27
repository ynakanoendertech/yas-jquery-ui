"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'node_modules/jquery/dist/jquery',
        lib: 'js/lib',
        app: 'js/app',
        nonDefine: 'js/non-define'
    },
    shim: {
        nonDefine: {
            depts: ['jquery'],
            exports: 'NonDefine'
        }
    }
});
