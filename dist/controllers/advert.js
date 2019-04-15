'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showAdvertList = showAdvertList;
exports.showAdvertAdd = showAdvertAdd;
function showAdvertList(req, res, next) {
    res.render('advert_list.html');
}

function showAdvertAdd(req, res, next) {
    res.render('advert_add.html');
}