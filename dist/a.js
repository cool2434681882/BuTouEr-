"use strict";

function foo(_ref) {
    var a = _ref.a,
        b = _ref.b,
        _ref$c = _ref.c,
        c = _ref$c === undefined ? 11 : _ref$c;

    console.log(a, b, c);
}
foo({
    a: 10,
    b: 222
});