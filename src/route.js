import express from 'express'
import { deflate } from 'zlib';

const router = express.Router()

// router.

router.get('/',(req,res)=>{
    res.render('index.html')
})

router.get('/advert',(req,res)=>{

})

router.get('/advert/add',(req,res)=>{

})

router.post('/advert/add',(req,res)=>{
    console.log(req.body)
})


export default router