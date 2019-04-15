const express = require('express')

const fs = require('fs')

//解析post提交的文件  formidable
const formidable = require('formidable')

const app = express()

app.set('views','views')
app.set('view engine','ejs')



app.get('/',(req,res,next)=>{
    res.render('index')
})
// 自己的
// app.post('/',(req,res,next)=>{
//     let data = ''
//     req.on('data',chunk=>{
//         data += chunk
//     })
//     req.on('end',()=>{
//         // console.log(data)
//         fs.writeFile('./body.txt',data,err=>{
//             if(err) throw err
//             res.end('ok')
//         })
//     })
// })

//postmidable 提交会自动将文件保存到暂存区
app.post('/',(req,res,next)=>{
    const form = new formidable.IncomingForm()
    form.uploadDir = './upload'
    form.keepExtensions = true
    form.parse(req,(err,fields,files)=>{
        if(err) throw err
        console.log(fields)
        console.log(files)
    })
})


app.listen(3000,()=>{
    console.log("runing 3000")
})