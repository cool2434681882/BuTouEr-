'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//es6
var app = (0, _express2.default)(); // const express = require('express')


//开放静态资源
app.use('/node_modules', _express2.default.static(_config2.default.node_modules_path));
app.use('/public', _express2.default.static(_config2.default.public_path));

//配置模板ejs引擎
app.set('views', _config2.default.viewPath);
app.set('view engine', 'ejs');

//配置bebal

app.get('/', function (req, res) {
    // res.end('hello!!!!')
    res.render('index');
});
app.listen(3000, function () {
    console.log('runing in 3000');
});