'use strict';

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (req, res, next) {
    // console.log(req.method.toLowerCase() === 'post')
    if (!(req.method.toLowerCase() === 'post')) {
        return next();
    }
    // if(!req.headers['content-length']){
    //     next()
    // }
    //由于post提交的数据数据量大可能会多次提交
    //通过监听req的data对象的回调接受到所有数据
    var data = '';
    req.on('data', function (chunk) {
        data += chunk;
        // foo=var&a=b&c=d&e=f
    });
    req.on('end', function () {
        data = _querystring2.default.parse(data);
        req.body = data;
        return next();
    });
}; //查询字符串