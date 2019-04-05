// const express = require('express')
import express from 'express'//es6

const app = express()


//配置bebal

app.get('/',(req,res) => {
    res.end('hello')
})
app.listen(3000,() => {
    console.log('runing in 3000')
})