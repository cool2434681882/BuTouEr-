// const express = require('express')
import express from 'express'//es6
const app = express()



//通用资源
import config from './config'

//开放静态资源
app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))

//配置模板ejs引擎
// app.set('views',config.viewPath)
// app.set('view engine', 'ejs')

// 配置nunjucks 模板引擎
import nunjucks from 'nunjucks'
nunjucks.configure(config.viewPath,{
    autoescape: true,
    express: app    
})

//post表单处理中间件
import bodyParser from './middlwares/body-parser.js'
app.use(bodyParser)
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
import router from './route.js'
app.use(router)

// 全局错误处理函数
import errLog from './middlwares/error-log.js'
app.use(errLog)

//配置bebal


app.listen(3000,() => {
    console.log('runing in 3000')
})

