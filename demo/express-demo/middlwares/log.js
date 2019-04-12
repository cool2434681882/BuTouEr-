const fs = require('fs')

module.exports = function(){
    return (req,res,next)=>{
        const log = `请求方式: ${req.method} 请求路径: ${req.url} 请求时间: ${+new Date()}\n`
        fs.appendFile('./log.txt',log,err=>{
            if(err) return console.log('纪录失败')
        })
        next()
    }
}