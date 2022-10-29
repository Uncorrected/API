const paramsError = {
    code: '10000',
    message: '参数错误',
    result: null
}

// 00 用户模块
// -- 注册
const userAlreadyExisted = {
    code: '10001',
    message: '用户已经存在',
    result: null
}
const userRegisterError = {
    code: '00002',
    message: '用户注册错误',
    result: null
}
// -- 登录
const userNothingness = {
    code: '10003',
    message: '用户不存在',
    result: null
}
const invalidPassword = {
    code: '10004',
    message: '密码不匹配',
    result: null
}
const userLoginError = {
    code: '00005',
    message: '登录错误',
    result: null
}
// -- 修改密码
const changePasswordError = {
    code: '00006',
    message: '修改密码失败',
    result: null
}
// const changePasswordError = {
//     code: '10008',
//     message: '修改密码错误',
//     result: null
// }

// 01 鉴权模块
const tokenExpiredError = {
    code: '10101',
    message: 'token过期',
    result: null
}
const invalidToken = {
    code: '10102',
    message: '无效的token',
    result: null
}
const hasNotAdminPermission = {
    code: '10103',
    message: '没有管理员权限',
    result: null
}

// 02 商品模块
const fileUploadError = {
    code: '10201',
    message: '文件上传失败',
    result: null
}
const unsupportedFiletype = {
    code: '10202',
    message: '不支持的文件类型',
    result: null
}
const publishGoodsError = {
    code: '00203',
    message: '发布商品失败',
    result: null
}


export {
    paramsError,
    userAlreadyExisted,
    userRegisterError,
    userNothingness,
    invalidPassword,
    userLoginError,
    changePasswordError,
    tokenExpiredError,
    invalidToken,
    hasNotAdminPermission,
    fileUploadError,
    unsupportedFiletype,
    publishGoodsError
}