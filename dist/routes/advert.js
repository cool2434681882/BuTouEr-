'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _advert = require('../models/advert');

var _advert2 = _interopRequireDefault(_advert);

var _advert3 = require('../controllers/advert');

var advertControllers = _interopRequireWildcard(_advert3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import errorLog from '../middlwares/error-log';
var router = _express2.default.Router();

// router

router.get('/err', function (req, res, next) {
    try {
        JSON.parse('ddddd');
    } catch (e) {
        next(e);
    }
});

router.get('/advert', advertControllers.showAdvertList);

router.get('/advert/add', advertControllers.showAdvertAdd);

router.post('/advert/add', function (req, res, next) {
    var body = req.body;
    var advert = new _advert2.default({
        title: body.title,
        image: body.image,
        link: body.link,
        start_time: body.start_time,
        end_time: body.end_time
    });
    advert.save(function (err, result) {
        if (err) return next(err);
        res.json({
            err_code: 0
        });
    });
});

router.get('/advert/list', function (req, res, next) {
    _advert2.default.find(function (err, docs) {
        if (err) return next(err);
        res.json({
            err_code: 0,
            result: docs
        });
    });
});

//更新
router.get('/advert/one/:advertId', function (req, res, next) {
    //路径参数
    _advert2.default.findById(req.params.advertId, function (err, result) {
        if (err) return next(err);
        res.json({
            err_code: 0,
            result: result
        });
    });
});
router.post('/advert/edit', function (req, res, next) {
    _advert2.default.findById(req.body.id, function (err, advert) {
        if (err) return next(err);
        var body = req.body;
        advert.title = body.title;
        advert.image = body.image;
        advert.link = body.link;
        advert.start_time = body.start_time;
        advert.end_time = body.end_time;
        advert.last_modified = Date.now();

        //如果内部有相同的id则直接更新原有的数据
        advert.save(function (err, result) {
            if (err) return next(err);
            res.json({
                err_code: 0
            });
        });
    });
});

router.get('/advert/remove/:advertId', function (req, res, next) {
    _advert2.default.remove({ _id: req.params.advertId }, function (err) {
        if (err) return next();
        res.json({
            err_code: 0
        });
    });
});

exports.default = router;