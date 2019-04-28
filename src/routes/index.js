import express from 'express'
const router = express.Router()
//调试用
import * as errController from '../controllers/err'
router.get('/err',(req,res,next)=>{
    errController.err()
})


import * as showControllers from '../controllers/index'
router
    .get('/',showControllers.showIndex)
    // .get('/user',showControllers.user)



export default router