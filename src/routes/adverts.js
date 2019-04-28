import express from 'express'
const router = express.Router()
import * as advertControllers from '../controllers/advert'

router.get('/advert',advertControllers.showAdvertList)
router.get('/advert/count',advertControllers.getAdvertCount)
router.get('/advert/list',advertControllers.getAdvertList)
router.get('/advert/add',advertControllers.showAdvertAdd)
router.post('/advert/add',advertControllers.postAdvertAdd)
router.get('/advert/one',advertControllers.showEdit)
router.get('/advert/oneData/:advertId',advertControllers.getEditData)
router.post('/advert/edit',advertControllers.postAdvertEdit)
router.get('/advert/remove/:advertId',advertControllers.getAdvertRemove)
export default router