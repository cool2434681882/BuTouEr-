const express = require('express')

const app = express()

app.get('/',(req,res,next)=>{
    // res.end('body { background-color:red; }')
    let data = {
        foo: 'foo',
        list: [1,2,3]
    }
    data = JSON.stringify(data)
    console.log(`请求路径:${req.url}`)
    // res.end(data) 
    // res.end(`var data = ${data}`) //1.不知道什么时候获取
    // res.end(`getData(${data})`) //2.必须知道客服端函数名
    res.end(`${ req.query.callback }(${ data })`)
    // getData({})
})
app.listen(3000,()=>{
    console.log('3000')
})