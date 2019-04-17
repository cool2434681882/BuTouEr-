import Advert from '../models/advert'

export function showAdvertList(req,res,next){
    // Advert.find((err,adverts)=>{
    //     if(err) return next(err)
    //     res.render('advert_list.html',{ adverts })
    // })
    const page = Number.parseInt(req.query.page)
    Advert
        .find()
        .skip((page - 1) * 5)
        .limit(5)
        .exec((err,adverts)=>{
            if(err) next(err)
            res.render('advert_list.html',{ adverts })
        })
}

export function showAdvertAdd(req,res,next){
    res.render('advert_add.html')
}
