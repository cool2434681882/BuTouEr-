'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.showAdvertList = showAdvertList;
exports.getAdvertList = getAdvertList;
exports.showAdvertAdd = showAdvertAdd;
exports.getAdvertCount = getAdvertCount;
exports.postAdvertAdd = postAdvertAdd;
exports.showEdit = showEdit;
exports.getEditData = getEditData;
exports.postAdvertEdit = postAdvertEdit;
exports.getAdvertRemove = getAdvertRemove;

var _advert = require('../models/advert');

var _advert2 = _interopRequireDefault(_advert);

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _upath = require('upath');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showAdvertList(req, res, next) {
    res.render('advert/advert_list.html');
}
function getAdvertList(req, res, next) {
    var _req$query = req.query,
        page = _req$query.page,
        pageSize = _req$query.pageSize;

    page = Number.parseInt(page);
    pageSize = Number.parseInt(pageSize);
    _advert2.default.find().skip((page - 1) * pageSize).limit(pageSize).exec(function (err, docs) {
        if (err) return next(err);
        res.json({
            err_code: 0,
            result: docs
        });
    });
}
function showAdvertAdd(req, res, next) {
    res.render('advert/advert_add.html');
}
function getAdvertCount(req, res, next) {
    _advert2.default.count(function (err, count) {
        if (err) return next(err);
        res.json({
            err_code: 0,
            result: count
        });
    });
}
function postAdvertAdd(req, res, next) {
    advertAdd(req).then(function (result) {
        var _result = _slicedToArray(result, 2),
            fields = _result[0],
            files = _result[1];

        var advert = new _advert2.default({
            title: fields.title,
            image: (0, _upath.basename)(files.image.path),
            link: fields.link,
            start_time: fields.start_time,
            end_time: fields.end_time
        });
        return advert.save();
    }).then(function () {
        res.json({
            err_code: 0
        });
    }).catch(function (err) {
        next(err);
    });
    function advertAdd(req) {
        return new Promise(function (resolve, reject) {
            var form = new _formidable2.default.IncomingForm();
            form.uploadDir = _config2.default.upload_path;
            form.keepExtensions = true;
            form.parse(req, function (err, fields, files) {
                if (err) reject(err);
                resolve([fields, files]);
            });
        });
    }
}
function showEdit(req, res, next) {
    res.render('advert/advert_edit.html');
}
function getEditData(req, res, next) {
    var editAdvertId = req.params.advertId;
    _advert2.default.findById(editAdvertId, function (err, result) {
        res.json({
            err_code: 0,
            result: result
        });
    });
}
function postAdvertEdit(req, res, next) {
    advertEdit(req).then(function (result) {
        var _result2 = _slicedToArray(result, 2),
            fields = _result2[0],
            files = _result2[1];

        if (files.image.size == 0) {
            return _advert2.default.findByIdAndUpdate(fields.id, {
                title: fields.title,
                link: fields.link,
                start_time: fields.start_time,
                end_time: fields.end_time
            });
        } else {
            _advert2.default.findById(fields.id, function (err, result) {
                var delateUrl = _config2.default.upload_path + '\\' + result.image;
                _fs2.default.unlink(delateUrl, function (err) {
                    if (err) return false;
                });
            });
            return _advert2.default.findByIdAndUpdate(fields.id, {
                title: fields.title,
                link: fields.link,
                start_time: fields.start_time,
                end_time: fields.end_time,
                image: (0, _upath.basename)(files.image.path)
            });
        }
    }).then(function () {
        res.json({
            err_code: 0
        });
    }).catch(function (err) {
        next(err);
    });
    function advertEdit(req) {
        return new Promise(function (resolve, reject) {
            var form = new _formidable2.default.IncomingForm();
            form.uploadDir = _config2.default.upload_path;
            form.keepExtensions = true;
            form.parse(req, function (err, fields, files) {
                if (err) reject(err);
                resolve([fields, files]);
            });
        });
    }
}
function getAdvertRemove(req, res, next) {
    console.log(req.params.advertId);
    _advert2.default.findById(req.params.advertId, function (err, result) {
        var delateUrl = _config2.default.upload_path + '\\' + result.image;
        console.log(delateUrl);
        _fs2.default.unlink(delateUrl, function (err) {
            if (err) return false;
        });
    }).then(function () {
        _advert2.default.remove({ _id: req.params.advertId }, function (err) {
            if (err) next(err);
            res.redirect('/advert');
        });
    });
}