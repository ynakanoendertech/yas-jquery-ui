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
    },
    map: {
        'module/module-as-function': {
            'module/simple': 'module/simple-2'
        }
    },
    config: {
        'module/simple-2': {
            max_size: 'XXXL',
            base_color: 'lightgreen'
        }
    }
});
