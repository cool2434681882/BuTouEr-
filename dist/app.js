'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _bodyParser = require('./middlwares/body-parser.js');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _advert = require('./routes/advert.js');

var _advert2 = _interopRequireDefault(_advert);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

var _errorLog = require('./middlwares/error-log.js');

var _errorLog2 = _interopRequireDefault(_errorLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//es6
var app = (0, _express2.default)();

// 配置nunjucks 模板引擎
// const express = require('express')

_nunjucks2.default.configure(_config2.default.viewPath, {
    autoescape: true,
    express: app,
    noCache: true
});

//通用资源


//开放静态资源
app.use('/node_modules', _express2.default.static(_config2.default.node_modules_path));
app.use('/public', _express2.default.static(_config2.default.public_path));
//配置模板ejs引擎
// app.set('views',config.viewPath)
// app.set('view engine', 'ejs')


//post表单处理中间件

app.use(_bodyParser2.default);
// // 将post提交的数据转为对象
// import querystring from 'querystring'
// app.use((req,res,next)=>{
//     //由于post提交的数据数据量大可能会多次提交
//     //通过监听req的data对象的回调接受到所有数据
//     let data = ''
//     req.on('data',chunk=>{
//         data += chunk
//         // foo=var&a=b&c=d&e=f
//     })
//     req.on('end',()=>{
//         data = querystring.parse(data)
//         req.body = data
//         next()
//     })
// })


//route


app.use(_advert2.default);
app.use(_index2.default);

// 全局错误处理函数

app.use(_errorLog2.default);

//配置bebal


app.listen(3000, function () {
    console.log('runing in 3000');
});