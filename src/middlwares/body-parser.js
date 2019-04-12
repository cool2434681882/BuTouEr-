//查询字符串
import querystring from 'querystring'
module.exports = (req,res,next)=>{
    // console.log(req.method.toLowerCase() === 'post')
    if(!(req.method.toLowerCase() === 'post')){
        return next()
    }
    // if(!req.headers['content-length']){
    //     next()
    // }
    //由于post提交的数据数据量大可能会多次提交
    //通过监听req的data对象的回调接受到所有数据
    let data = ''
    req.on('data',chunk=>{
        data += chunk
        // foo=var&a=b&c=d&e=f
    })
    req.on('end',()=>{
        data = querystring.parse(data)
        req.body = data
        return next()
    })
}
