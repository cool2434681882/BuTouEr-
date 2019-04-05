const express = require('express')
const fs = require('fs')

const app = express()

//中间件 任何请求都会执行,不会自动继续执行,通过next继续执行
app.use(function(req,res,next){
    // 获取请求路径
    // console.log(req.path)
    if(req.path.startsWith('/public/')){
        fs.readFile(`.${req.path}`,(err,data)=>{
            if(err) {
                return res.end('404 Not Found!')
            }
            res.end(data)
        })
    }else{
        next()
    }
})

app.get('/',function(req,res){
    res.write('hello')
    res.write(' express!')
    res.end()
})
app.listen(3000,function(){
    console.log('loading 3000')
})
