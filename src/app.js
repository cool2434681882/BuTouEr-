// const express = require('express')
import express from 'express'//es6
const app = express()

import config from './config'

//开放静态资源
app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))

//配置模板ejs引擎
app.set('views',config.viewPath)
app.set('view engine', 'ejs')

//配置bebal

app.get('/',(req,res) => {
    // res.end('hello!!!!')
    res.render('index')
})
app.listen(3000,() => {
    console.log('runing in 3000')
})

