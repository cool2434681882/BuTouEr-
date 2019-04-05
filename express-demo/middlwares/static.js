const fs = require('fs')
const path = require('path')
module.exports = function (dirPath){
    // console.log(dirPath) //未执行
    return (req,res,next)=>{
        const filePath = path.join(dirPath,req.path)
        fs.readFile(filePath,(err,data)=>{
            if(err){
                return res.end('404')
            }
            res.end(data)
        })
    }
}