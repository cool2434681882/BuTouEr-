'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost:27017/BuTouErTwo', { useNewUrlParser: true });

var errLogSchema = _mongoose2.default.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    stack: { type: String, required: true },
    time: { type: Date, default: Date.now }
});
exports.default = _mongoose2.default.model('errLog', errLogSchema);