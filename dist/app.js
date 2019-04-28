'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _adverts = require('./routes/adverts');

var _adverts2 = _interopRequireDefault(_adverts);

var _err_log = require('./middlwares/err_log');

var _err_log2 = _interopRequireDefault(_err_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//开放静态资源
app.use('/node_modules', _express2.default.static(_config2.default.node_modules_path));
app.use('/public', _express2.default.static(_config2.default.public_path));

// nunjuckse模板

_nunjucks2.default.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

//route

app.use(_index2.default);
app.use(_adverts2.default);

//全局错误处理

app.use(_err_log2.default);

app.listen(9999, function () {
    console.log("9999 runing...");
});