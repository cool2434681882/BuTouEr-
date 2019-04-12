import express from 'express'
import { deflate } from 'zlib';
import fs from 'fs';
import errorLog from './middlwares/error-log';

const router = express.Router()

//解析post请求数据

//mongodb配置
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'BuTouEr'


// const dbName = 'test'


// router
router.get('/',(req,res,next)=>{
    fs.readFile("FFFF",(err,data)=>{
        if(err){
            return next(err)
        }
        res.render('index.html') //必须在函数内才不会执行
    })
})
router.get('/err',(req,res,next)=>{
    try{
        JSON.parse('ddddd')
    }catch(e){
        next(e)
    }
})

router.get('/advert',(req,res)=>{

})

router.get('/advert/add',(req,res)=>{

})

router.post('/advert/add',(req,res,next)=>{
    //字符串转换封装
    res.sendJson = (obj)=>{
        res.end(JSON.stringify(obj))
    }
    // res.end('') res.write() //只可以接受2进制和字符串
    // res.end(JSON.stringify(req.body))
    // res.sendJson(req.body)
    // console.log(req.body)


    MongoClient.connect(url,(err,client)=>{
        // 跳到错误处理中间件
        if(err) return next(err)
        // assert.equal(null,err)
        const db = client.db(dbName)
    
        db
            .collection('adverts')
            .insertOne(req.body,(err,result)=>{
                if(err){
                    throw err
                }
                console.log(result)
                res.json({
                    err_code: 0
                })
        })
    
        client.close()
    })
})


export default router