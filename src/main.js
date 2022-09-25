//解构环境变量
import env from './config/config.default.js'
const { APP_PORT } = env

//引入Koa框架
import app from './app/index.js'

//启动服务
app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`)
})