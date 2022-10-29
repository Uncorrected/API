// @description 参数校验中间件

import { paramsError } from '../constant/err.type.js'

const genValidateParams = schema => async (ctx, next) => {
    // const res = schema.validate(ctx.request.body)
    // console.log(res.value)
    const { error } = schema.validate(ctx.request.body, { convert: false })
    // console.log(error)
    if (error) {
        paramsError.result = error.details
        ctx.app.emit('error', paramsError, ctx)
        return
    }
    await next()
}

export default genValidateParams