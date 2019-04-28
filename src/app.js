import express from 'express'

import config from './config'
const app = express()

//开放静态资源
app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))

// nunjuckse模板
import nunjucks from 'nunjucks'
nunjucks.configure('views',{
    autoescape: true,
    express: app,
    noCache:true 
})

//route
import indexRoute from './routes/index'
import advertRoute from './routes/adverts'
app.use(indexRoute)
app.use(advertRoute)


//全局错误处理
import errLog from './middlwares/err_log'
app.use(errLog)

app.listen(9999,()=>{
    console.log("9999 runing...")
})