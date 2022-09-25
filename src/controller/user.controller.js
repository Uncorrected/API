import userService from '../service/user.service.js'
const { createUser } = userService

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
            return
        }
    }

    async login(ctx, next) {
        ctx.body = '登录成功'
    }
}

export default new UserController()