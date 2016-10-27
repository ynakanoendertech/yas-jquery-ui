"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'node_modules/jquery/dist/jquery',
        lib: 'js/lib',
        app: 'js/app'
    }
});

requirejs(['jquery', 'lib/canvas', 'app/sub'], function($, canvas, sub) {

    console.dir($('body'));

    var canvas = new canvas('123');
    console.dir(canvas);

    var sub = new sub('abc');
    console.dir(sub);
});