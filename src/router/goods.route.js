import Router from '@koa/router'

import { auth, handleAdminPermission } from '../middleware/auth.middleware.js'
import goodsController from '../controller/goods.controller.js'
import genValidateParams from '../middleware/validateParams.js'
import { createGoodsSchema } from '../validator/goods.js'

const router = new Router({ prefix: '/goods' })
const { upload, create } = goodsController

router.post('/upload', auth, handleAdminPermission, upload)
router.post('/', genValidateParams(createGoodsSchema), auth, handleAdminPermission, create)

export default router