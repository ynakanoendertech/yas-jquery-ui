"use strict";

requirejs(
    ['jquery', 'lib/canvas', 'app/sub', 'nonDefine', 'module/simple', 'module/definition-function-with-dependency'],
    function($, canvas, sub, NonDefine, Simple, DefFuncWithDep) {

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

    var defFuncWithDep = DefFuncWithDep;
    defFuncWithDep.increaseAge();
    console.dir(defFuncWithDep);
});
