import bcrypt from 'bcryptjs'
import userService from '../service/user.service.js'
import { userFormateError, userAlreadyExisted, userRegisterError, userNothingness, invalidPassword, userLoginError } from '../constant/err.type.js'
const { getUserInfo } = userService

const userValidator = (arr) => async (ctx, next) => {
    // console.log(arr)
    // arr.forEach(item => {
    //     if (!ctx.request.body.hasOwnProperty[item]) {
    //         return 
    //     }
    // });
    for (let i of arr) {
        // console.log(i)
        // console.log(ctx.request.body[i])
        if (!ctx.request.body[i]) {
            ctx.app.emit('error', userFormateError, ctx)
            return
        }
    }
    // const { user_name, password } = ctx.request.body
    // if (!user_name || !password) {
    //     ctx.status = 400
    //     ctx.app.emit('error', userFormateError, ctx)
    //     return
    // }
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
    } catch (err) {
        console.error(err)
        ctx.app.emit('error', userRegisterError, ctx)
        return
    }
    await next()
}

const encryptPassword = async (ctx, next) => {
    const { password } = ctx.request.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    ctx.request.body.password = hash
    await next()
}

const verifyLogin = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    try {
        const res = await getUserInfo({ user_name })
        if (!res) {
            ctx.app.emit("error", userNothingness, ctx)
            return
        }
        console.log(password, res.password)
        if (!bcrypt.compareSync(password, res.password)) {
            ctx.app.emit("error", invalidPassword, ctx)
            return
        }
    } catch (err) {
        console.log("错误：", err)
        ctx.app.emit("error", userLoginError, ctx)
        return
    }
    await next()
}

export {
    userValidator,
    verifyUser,
    encryptPassword,
    verifyLogin
}