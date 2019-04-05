'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

exports.default = {
    viewPath: (0, _path.join)(__dirname, '../views'),
    node_modules_path: (0, _path.join)(__dirname, '../node_modules'),
    public_path: (0, _path.join)(__dirname, '../public')
}; // 暴露对象 es6
//写法1
// export const foo = 'bar'
// export const f = function(){}

//写法2
// const foo = 'bar'
// const f = function(){}
// export {foo,f}

// 获取
// import {foo} from './config'
// console.log(foo)
//获取全部
// import * as config from './config'
// console.log(config)

//import config from './config' 会加载export default 导出的文件 = module.export=fn

//通过export 导出的成员必须通过解构赋值按需加载 或者* as 整体加载