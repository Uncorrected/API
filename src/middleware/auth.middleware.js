import jwt from 'jsonwebtoken'
import env from '../config/config.default.js'
const { JWT_SECRET } = env
import { tokenExpiredError, invalidToken, hasNotAdminPermission } from '../constant/err.type.js'

//认证
const auth = async (ctx, next) => {
    const { authorization } = ctx.request.header
    // console.log(authorization)
    if (!authorization) {
        ctx.app.emit('error', "没有携带token", ctx)
        return
    }
    try {
        const token = authorization.replace('Bearer ', '')
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
        // console.log(ctx.state.user)
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.log('token过期了', err)
                ctx.app.emit('error', tokenExpiredError, ctx)
                break;
            case 'JsonWebTokenError':
                console.log('无效的token', err)
                ctx.app.emit('error', invalidToken, ctx)
                break;
        }
        return
    }
    await next()
}

//授权
const handleAdminPermission = async (ctx, next) => {
    const { is_admin } = ctx.state.user
    if (!is_admin) {
        ctx.app.emit('error', hasNotAdminPermission, ctx)
        return
    }
    await next()
}

export {
    auth,
    handleAdminPermission
}