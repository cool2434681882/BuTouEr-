'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

var _err_log = require('./middlwares/err_log');

var _err_log2 = _interopRequireDefault(_err_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//开放静态资源
app.use('/node_modules', _express2.default.static(_config2.default.node_modules_path));
app.use('/public', _express2.default.static(_config2.default.public_path));

//route

app.use(_index2.default);

//全局错误处理

app.use(_err_log2.default);

app.listen(9999, function () {
    console.log("9999 runing...");
});