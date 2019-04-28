'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _err = require('../controllers/err');

var errController = _interopRequireWildcard(_err);

var _index = require('../controllers/index');

var showControllers = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
//调试用

router.get('/err', function (req, res, next) {
    errController.err();
});

router.get('/', showControllers.showIndex);
// .get('/user',showControllers.user)


exports.default = router;