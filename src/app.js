// const express = require('express')
import express from 'express'//es6
const app = express()

// app.set('views','')

//配置bebal

app.get('/',(req,res) => {
    // res.end('hello!!!!')
    res.render('')
})
// app.listen(3000,() => {
//     console.log('runing in 3000')
// })

import {foo} from './config'
console.log(foo)