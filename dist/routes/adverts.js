'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _advert = require('../controllers/advert');

var advertControllers = _interopRequireWildcard(_advert);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get('/advert', advertControllers.showAdvertList);
router.get('/advert/count', advertControllers.getAdvertCount);
router.get('/advert/list', advertControllers.getAdvertList);
router.get('/advert/add', advertControllers.showAdvertAdd);
router.post('/advert/add', advertControllers.postAdvertAdd);
router.get('/advert/one', advertControllers.showEdit);
router.get('/advert/oneData/:advertId', advertControllers.getEditData);
router.post('/advert/edit', advertControllers.postAdvertEdit);
router.get('/advert/remove/:advertId', advertControllers.getAdvertRemove);
exports.default = router;