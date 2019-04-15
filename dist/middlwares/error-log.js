'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017';
var dbName = 'BuTouEr';

exports.default = function (errLog, req, res, next) {
    //纪录到数据库{名称 信息 堆栈 时间}
    MongoClient.connect(url, function (err, client) {
        //TODO 数据库无法链接
        // assert.equal(null,err)
        var db = client.db(dbName);

        db.collection('error_logs').insertOne({
            name: errLog.name,
            message: errLog.message,
            stack: errLog.stack,
            time: new Date()
        }, function (err, result) {
            res.json({
                err_code: 500,
                message: errLog.message
            });
            console.log('errlog');
        });

        client.close();
    });
};