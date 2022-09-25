import userService from '../service/user.service.js'
import { userFormateError, userAlreadyExisted } from '../constant/err.type.js'
const { getUserInfo } = userService

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    if (!user_name || !password) {
        ctx.status = 400
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
    await next()
}

const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body
    try {
        const res = await getUserInfo({ user_name })
        if (res) {
            ctx.app.emit('error', userAlreadyExisted, ctx)
            return
        }
        await next()
    } catch (err) {
        console.error(err)
        return
    }
}

export default {
    userValidator,
    verifyUser
}