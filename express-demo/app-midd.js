const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const log = require('./middlwares/log')

const static = require('./middlwares/static')



//纪录
app.use(log())
// app.use((req,res,next)=>{
//      const log = `${req.method}${req.url}${+new Date()}
// `
//     //  console.log(data)
//     fs.appendFile('./log.txt',log,err=>{
//         if(err) return console.log('error')
//     })
//  })

// 读取静态文件
app.use('/public',static(path.join(__dirname,'public')))
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


//404
app.use((req,res,next)=>{
    res.end('404')
})
app.listen(3000,function(){
    console.log('runing in 3000')
})