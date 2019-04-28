'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    view_path: _path2.default.join(__dirname, '../views'),
    node_modules_path: _path2.default.join(__dirname, '../node_modules'),
    public_path: _path2.default.join(__dirname, '../public'),
    upload_path: _path2.default.join(__dirname, '../public/uploads')
};