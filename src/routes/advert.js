import express from 'express'
import fs from 'fs';
// import errorLog from '../middlwares/error-log';
import Advert from '../models/advert'

import { basename } from 'path'

import config from '../config'

import * as advertControllers from '../controllers/advert'

const router = express.Router()

const formidable = require('formidable')

// router

router.get('/err',(req,res,next)=>{
    try{
        JSON.parse('ddddd')
    }catch(e){
        next(e)
    }
})

router.get('/advert',advertControllers.showAdvertList)

router.get('/advert/add',advertControllers.showAdvertAdd)

router.post('/advert/add',(req,res,next)=>{
    const form = new formidable.IncomingForm() //处理带文件的post请求
    form.uploadDir = config.uploadDir //文件保存的路径
    form.keepExtensions = true //保持扩展名
    form.parse(req,(err,fields,files)=>{
        if(err) return next()
        const body = fields
        // console.log(fields)
        // console.log(files) //同步提交会有问题
        body.image = basename(files.image.path)
        // console.log(basename(files.image.path))
    
        // 数据库
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
})
// router.post('/advert/add',(req,res,next)=>{
//     const body = req.body
//     const advert = new Advert({
//         title: body.title,
//         image: body.image,
//         link: body.link,
//         start_time: body.start_time,
//         end_time: body.end_time,
//     })
//     advert.save((err,result)=>{
//         if(err) return next(err)
//         res.json({
//             err_code: 0
//         })
//     })
// })

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