'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/BuTouEr', { useNewUrlParser: true });

var advertSchema = _mongoose2.default.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    start_time: { type: Date, default: Date.now },
    end_time: { type: Date, required: true },
    create_time: { type: Date, default: Date.now },
    last_modified: { type: Date, default: Date.now }
});

exports.default = _mongoose2.default.model('Advert', advertSchema);