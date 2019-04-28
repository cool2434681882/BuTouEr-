'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.err = err;
function err(req, res, next) {
    try {
        JSON.parse('dddd');
    } catch (e) {
        next(e);
    }
}