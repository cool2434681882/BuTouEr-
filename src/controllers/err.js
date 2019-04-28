export function err(req,res,next){
    try{
        JSON.parse('dddd')
    }catch(e){
        next(e)
    }
}