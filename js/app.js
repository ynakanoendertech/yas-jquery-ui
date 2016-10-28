"use strict";

requirejs(['jquery', 'lib/canvas', 'app/sub', 'nonDefine', 'module/simple'], function($, canvas, sub, NonDefine, Simple) {

    var test = $('.test');
    console.dir(test);

    var canvas = new canvas('123');
    console.dir(canvas);

    var sub = new sub('abc');
    console.dir(sub);

    var nonDefine = new NonDefine('Bobcat');
    console.dir(nonDefine);

    var simple = Simple;
    console.dir(simple);
});