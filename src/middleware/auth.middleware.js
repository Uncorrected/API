import jwt from 'jsonwebtoken'
import env from '../config/config.default.js'
const { JWT_SECRET } = env
import { tokenExpiredError, invalidToken } from '../constant/err.type.js'

const auth = async (ctx, next) => {
    const { authorization } = ctx.request.header
    console.log(authorization)
    if (!authorization) {
        ctx.app.emit('error', "没有携带token", ctx)
        return
    }
    try {
        const token = authorization.replace('Bearer ', '')
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
        console.log(ctx.state.user)
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

export {
    auth
}