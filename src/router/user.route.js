import Router from '@koa/router'
const router = new Router({ prefix: '/users' })

import userController from '../controller/user.controller.js'
import { userValidator, verifyUser, encryptPassword, verifyLogin } from '../middleware/user.middleware.js'
import { auth } from '../middleware/auth.middleware.js'
const { register, login, changePWD } = userController

router.post('/register', userValidator(["user_name", "password"]), verifyUser, encryptPassword, register)
router.post('/login', userValidator(["user_name", "password"]), verifyLogin, login)
router.patch('/', userValidator(["password"]), auth, encryptPassword, changePWD)

export default router