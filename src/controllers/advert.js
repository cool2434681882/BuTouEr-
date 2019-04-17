import Advert from '../models/advert'

export function showAdvertList(req,res,next){
    Advert.find((err,adverts)=>{
        if(err) return next(err)
        res.render('advert_list.html',{ adverts })
    })
}

export function showAdvertAdd(req,res,next){
    res.render('advert_add.html')
}
