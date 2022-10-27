import Router from '@koa/router'
const router = new Router({ prefix: '/goods' })

import { auth, handleAdminPermission } from '../middleware/auth.middleware.js'

import goodsController from '../controller/goods.controller.js'
const { upload } = goodsController

router.post('/upload', auth, handleAdminPermission, upload)

export default router