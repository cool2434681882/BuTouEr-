'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showIndex = showIndex;
function showIndex(req, res, next) {
    res.render('index.html'); //必须在函数内才不会执行
}