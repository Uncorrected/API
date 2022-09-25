import Router from '@koa/router'
const router = new Router({ prefix: '/users' })

import userController from '../controller/user.controller.js'
import userMiddleware from '../middleware/user.middleware.js'
const { userValidator, verifyUser } = userMiddleware
const { register, login } = userController
router.post('/register', userValidator, verifyUser, register)
router.post('/login', userValidator, login)

export default router