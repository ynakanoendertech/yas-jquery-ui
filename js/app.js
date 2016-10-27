"use strict";

requirejs(['jquery', 'lib/canvas', 'app/sub', 'nonDefine'], function($, canvas, sub, NonDefine) {

    console.dir($('body'));

    var canvas = new canvas('123');
    console.dir(canvas);

    var sub = new sub('abc');
    console.dir(sub);

    var nonDefine = new NonDefine('Bobcat');
    console.dir(nonDefine);
});