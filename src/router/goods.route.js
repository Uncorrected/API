import Router from '@koa/router'

import { auth, handleAdminPermission } from '../middleware/auth.middleware.js'
import goodsController from '../controller/goods.controller.js'
import genValidateParams from '../middleware/validateParams.js'
import { createGoodsSchema, updateGoodsSchema } from '../validator/goods.js'

const router = new Router({ prefix: '/goods' })
const { upload, create, update } = goodsController

router.post('/upload', auth, handleAdminPermission, upload)
router.post('/create', genValidateParams(createGoodsSchema), auth, handleAdminPermission, create)
router.put('/update', genValidateParams(updateGoodsSchema), auth, handleAdminPermission, update)

export default router