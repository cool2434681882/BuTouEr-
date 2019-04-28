import AdvertDb from '../models/advert'
import formidable from 'formidable'
import config from '../config'
import { basename } from 'upath'
import fs from 'fs'

export function showAdvertList(req,res,next){
    res.render('advert/advert_list.html')
}
export function getAdvertList(req,res,next){
    let { page,pageSize } = req.query
    page = Number.parseInt(page)
    pageSize = Number.parseInt(pageSize)
    AdvertDb
        .find()
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec((err,docs)=>{
            if(err) return next(err)
            res.json({
                err_code: 0,
                result: docs
            })
        })

}
export function showAdvertAdd(req,res,next){
    res.render('advert/advert_add.html')
}
export function getAdvertCount(req,res,next){
    AdvertDb.count((err,count)=>{
        if(err) return next(err)
        res.json({
            err_code: 0,
            result: count
        })
    })
}
export function postAdvertAdd(req,res,next){
    advertAdd(req)
        .then((result)=>{
            const [fields,files] = result
            const advert = new AdvertDb({
                title: fields.title,
                image: basename(files.image.path),
                link: fields.link,
                start_time: fields.start_time,
                end_time: fields.end_time
            })
            return advert.save()
        })
        .then(()=>{
            res.json({
                err_code: 0
            })
        })
        .catch((err)=>{
            next(err)
        })
    function advertAdd(req){
        return new Promise((resolve,reject)=>{
            const form = new formidable.IncomingForm()
            form.uploadDir = config.upload_path
            form.keepExtensions = true
            form.parse(req,(err,fields,files)=>{
                if(err) reject(err)
                resolve([fields,files])
            })
        })
    }
}
export function showEdit(req,res,next){
    res.render(`advert/advert_edit.html`)
}
export function getEditData(req,res,next){
    const editAdvertId = req.params.advertId
    AdvertDb.findById(editAdvertId,(err,result)=>{
        res.json({
            err_code: 0,
            result: result
        })
    })
}
export function postAdvertEdit(req,res,next){
    advertEdit(req)
        .then(result=>{
            const [fields,files] = result
            if(files.image.size == 0){
                return AdvertDb.findByIdAndUpdate(fields.id,{
                    title:fields.title,
                    link: fields.link,
                    start_time: fields.start_time,
                    end_time: fields.end_time
                })
            }else{
                AdvertDb.findById(fields.id,(err,result)=>{
                    const delateUrl = `${config.upload_path}\\${result.image}`
                    fs.unlink(delateUrl,(err)=>{
                        if(err) return false
                    })
                })
                return AdvertDb.findByIdAndUpdate(fields.id,{
                    title:fields.title,
                    link: fields.link,
                    start_time: fields.start_time,
                    end_time: fields.end_time,
                    image:basename(files.image.path)
                })
            }
        })
        .then(()=>{
            res.json({
                err_code: 0
            })
        })
        .catch((err)=>{
            next(err)
        })
    function advertEdit(req){
        return new Promise((resolve,reject)=>{
            const form = new formidable.IncomingForm
            form.uploadDir = config.upload_path
            form.keepExtensions = true
            form.parse(req,(err,fields,files)=>{
                if(err) reject(err)
                resolve([fields,files])
            })
        })
    }
    
}
export function getAdvertRemove(req,res,next){
    console.log(req.params.advertId)
    AdvertDb.findById(req.params.advertId,(err,result)=>{
        const delateUrl = `${config.upload_path}\\${result.image}`
        console.log(delateUrl)
        fs.unlink(delateUrl,(err)=>{
            if(err) return false
        })
    })
    .then(()=>{
        AdvertDb.remove({_id: req.params.advertId},(err)=>{
            if(err) next(err)
            res.redirect('/advert')
        })
    })
}

