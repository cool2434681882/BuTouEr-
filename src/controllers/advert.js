import Advert from '../models/advert'

export function showAdvertList(req,res,next){
    // Advert.find((err,adverts)=>{
    //     if(err) return next(err)
    //     res.render('advert_list.html',{ adverts })
    // })
    const page = Number.parseInt(req.query.page)
    const pageSize = 5
    Advert
        .find()
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .exec((err,adverts)=>{
            if(err) next(err)
                // 获取总条数 
            Advert.count((err,count)=>{
                if(err) next(err)
                //技术总页码条数
                const totalPage = Math.ceil(count / pageSize) //向上取整
                res.render('advert_list.html',{ adverts,totalPage,page })
            })
        })

}

export function showAdvertAdd(req,res,next){
    res.render('advert_add.html')
}
