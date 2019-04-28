'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _err_log = require('../models/err_log');

var _err_log2 = _interopRequireDefault(_err_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (errLog, req, res, next) {
    console.log('errlog run');
    var errModel = new _err_log2.default({
        name: errLog.name,
        message: errLog.message,
        stack: errLog.stack,
        time: new Date()
    });
    errModel.save(function (err, result) {
        res.json({
            err_code: 500,
            message: errLog.message
        });
    });
};