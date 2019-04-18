// import express from 'express'
const express = require('express')
const path = require('path')

const formidable = require('formidable'),
    http = require('http'),
    util = require('util')
const app = express()

app.use('/node_modules',express.static(path.join(__dirname,'../../node_modules')))

const nunjucks = require('nunjucks')
nunjucks.configure(__dirname,{
    autoescape: true,
    express: app,
    noCache:true    
})

const form = new formidable.IncomingForm()
form.uploadDir = path.join(__dirname,'/updata')
form.keepExtensions = true;

app.get('/',(req,res,next)=>{
    res.render('index.html')
})
app.post('/add',(req,res,next)=>{
    form.parse(req,(err,fields,files)=>{
        // console.log(files)
        console.log(fields)
    })
})

app.listen(3000,()=>{
    console.log(path.join(__dirname,'../../node_modules'))
})