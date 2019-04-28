import ErrModel from '../models/err_log'

export default (errLog,req,res,next)=>{
    console.log(errLog.message)
    const errModel = new ErrModel({
        name: errLog.name,
        message: errLog.message,
        stack: errLog.stack,
        time: new Date()
    })
    errModel.save((err,result)=>{
        res.json({
            err_code: 500,
            message: errLog.message
        })
    })
}