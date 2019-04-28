'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showIndex = showIndex;
function showIndex(req, res, next) {
    res.render('index/index.html');
}