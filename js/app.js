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

requirejs(['jquery', 'lib/canvas', 'app/sub', 'nonDefine'], function($, canvas, sub, NonDefine) {

    console.dir($('body'));

    var canvas = new canvas('123');
    console.dir(canvas);

    var sub = new sub('abc');
    console.dir(sub);

    var nonDefine = new NonDefine('Bobcat');
    console.dir(nonDefine);
});