import express from 'express'
import fs from 'fs';
import errorLog from './middlwares/error-log';
import Advert from './models/advert'

const router = express.Router()

//解析post请求数据

//mongodb配置
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017/BuTouEr'

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
    const body = req.body
    const advert = new Advert({
        title: body.title,
        image: body.image,
        link: body.link,
        start_time: body.start_time,
        end_time: body.end_time,
    })

    advert.save((err,result)=>{
        if(err) return next(err)
        res.json({
            err_code: 0
        })
    })
})

router.get('/advert/list',(req,res,next)=>{
    Advert.find((err,docs)=>{
        if(err) return next(err)
        res.json({
            err_code: 0,
            result: docs
        })
    })
})

//更新
router.get('/advert/one/:advertId',(req,res,next)=>{ //路径参数
    Advert.findById(req.params.advertId,(err,result)=>{
        if(err) return next(err)
        res.json({
            err_code: 0,
            result:result
        })
    })
})
router.post('/advert/edit',(req,res,next)=>{
    Advert.findById(req.body.id,(err,advert)=>{
        if(err) return next(err)
        const body = req.body
        advert.title = body.title
        advert.image = body.image
        advert.link = body.link
        advert.start_time = body.start_time
        advert.end_time = body.end_time
        advert.last_modified = Date.now()

        //如果内部有相同的id则直接更新原有的数据
        advert.save((err,result)=>{
            if(err) return next(err)
            res.json({
                err_code: 0
            })
        })
    })
})

router.get('/advert/remove/:advertId',(req,res,next)=>{
    Advert.remove({_id: req.params.advertId},err=>{
        if(err) return next()
        res.json({
            err_code: 0
        })
    })
})

export default router