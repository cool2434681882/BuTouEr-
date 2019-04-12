const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'BuTouEr'



export default (errLog,req,res,next)=>{
    //纪录到数据库{名称 信息 堆栈 时间}
    MongoClient.connect(url,(err,client)=>{
        //TODO 数据库无法链接
        // assert.equal(null,err)
        const db = client.db(dbName)
    
        db
            .collection('error_logs')
            .insertOne({
                name: errLog.name,
                message: errLog.message,
                stack: errLog.stack,
                time: new Date()
            },(err,result)=>{
                res.json({
                    err_code: 500,
                    message: errLog.message
                })
                console.log('errlog')
        })
    
        client.close()
    })
}