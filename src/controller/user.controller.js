import jwt from 'jsonwebtoken'
import env from '../config/config.default.js'
const { JWT_SECRET } = env
import userService from '../service/user.service.js'
const { createUser, getUserInfo, upDateUser } = userService
import { userRegisterError, changePWDError } from '../constant/err.type.js'
class UserController {
    async register(ctx, next) {
        const { user_name, password } = ctx.request.body
        try {
            const res = await createUser(user_name, password)
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name
                }
            }
        } catch (err) {
            console.error(err)
            ctx.app.emit('error', userRegisterError, ctx)
            return
        }
    }

    async login(ctx, next) {
        const { user_name } = ctx.request.body
        console.log(user_name)
        try {
            const res = await getUserInfo({ user_name });
            const { password, ...resUser } = res;
            ctx.body = {
                code: 0,
                message: '用户登录成功',
                result: {
                    token: jwt.sign(resUser, JWT_SECRET, { expiresIn: '2h' })
                }
            }
        } catch (err) {
            console.log("错误", err)
        }
    }

    async changePWD(ctx, next) {
        const { id } = ctx.state.user
        const { password } = ctx.request.body
        // console.log(id, password)
        try {
            const res = await upDateUser({ id, password })
            // console.log(res)
            if (!res) {
                ctx.app.emit('error', changePWDError, ctx)
                return
            }
            ctx.body = {
                code: 0,
                message: '修改密码成功',
                result: null
            }
        } catch (err) {
            console.log(err)
            return
        }
    }
}

export default new UserController()