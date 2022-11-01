import Router from '@koa/router'

import { auth, handleAdminPermission } from '../middleware/auth.middleware.js'
import goodsController from '../controller/goods.controller.js'
import genValidateParams from '../middleware/validateParams.js'
import { createGoodsSchema, updateGoodsSchema } from '../validator/goods.js'

const router = new Router({ prefix: '/goods' })
const { upload, create, update, changeStatus, remove, findAll } = goodsController

router.post('/upload', auth, handleAdminPermission, upload)
router.post('/', genValidateParams(createGoodsSchema), auth, handleAdminPermission, create)
router.put('/:id', genValidateParams(updateGoodsSchema), auth, handleAdminPermission, update)
// router.patch('/:id', auth, handleAdminPermission, changeStatus)
router.delete('/:id', auth, handleAdminPermission, remove)
router.get('/', findAll)

export default router