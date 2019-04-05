const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const static = require('./middlwares/static')
app.use('/public',static(path.join(__dirname,'public')))


// 封装
// function static(dirPath){
//     // console.log(dirPath) //未执行
//     return (req,res,next)=>{
//         const filePath = path.join(dirPath,req.path)
//         fs.readFile(filePath,(err,data)=>{
//             if(err){
//                 return res.end('404')
//             }
//             res.end(data)
//         })
//     }
// }

// app.use('/public',(req,res,next)=>{
//     const urlPath = req.path
//     if(urlPpath.startsWidth('/public/')){
//         fs.readFile(filePath,(err,data)=>{
//             if(err){
//                 return res.end('404')
//             }else{
//                 res.end(data)
//             }
//         })
//     }else{
//         next()
//     }
// })

app.listen(3000,function(){
    console.log('runing in 3000')
})