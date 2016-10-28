"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'node_modules/jquery/dist/jquery',
        lib: 'js/lib',
        app: 'js/app',
        module: 'js/app/module',
        nonDefine: 'js/non-define'
    },
    shim: {
        nonDefine: {
            depts: ['jquery'],
            exports: 'NonDefine'
        }
    }
});
