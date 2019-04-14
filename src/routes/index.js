import express from 'express'
import * as indexController from '../controllers/index' //加载所有暴露的函数

const router = express.Router()


router
    .get('/',indexController.showIndex)

export default router