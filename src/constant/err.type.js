const userFormateError = {
    code: '10001',
    message: '缺少参数',
    result: null
}
const userAlreadyExisted = {
    code: '10002',
    message: '用户已经存在',
    result: null
}
const userRegisterError = {
    code: '10003',
    message: '用户注册错误',
    result: null
}

const userNothingness = {
    code: '10004',
    message: '用户不存在',
    result: null
}
const invalidPassword = {
    code: '10005',
    message: '密码不匹配',
    result: null
}
const userLoginError = {
    code: '10006',
    message: '登录错误',
    result: null
}

const changePWDError = {
    code: '10007',
    message: '修改密码失败',
    result: null
}
// const changePWDError = {
//     code: '10008',
//     message: '修改密码错误',
//     result: null
// }

const tokenExpiredError = {
    code: '10101',
    message: 'token过期',
    result: null
}
const invalidToken = {
    code: '10101',
    message: '无效的token',
    result: null
}

export {
    userFormateError,
    userAlreadyExisted,
    userRegisterError,
    userNothingness,
    invalidPassword,
    userLoginError,
    changePWDError,
    tokenExpiredError,
    invalidToken
}