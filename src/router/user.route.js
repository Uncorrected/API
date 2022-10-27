import Router from '@koa/router'
const router = new Router({ prefix: '/users' })

import userController from '../controller/user.controller.js'
const { register, login, changePassword } = userController

import genValidateParams from '../middleware/validateParams.js'
import { loginUserSchema, registerUserSchema, passwordSchema } from '../validator/user.js'
import { verifyRegister, encryptPassword, verifyLogin } from '../middleware/user.middleware.js'
import { auth } from '../middleware/auth.middleware.js'

router.post('/register', genValidateParams(loginUserSchema), verifyRegister, encryptPassword, register)
router.post('/login', genValidateParams(registerUserSchema), verifyLogin, login)
router.patch('/', genValidateParams(passwordSchema), auth, encryptPassword, changePassword)

export default router