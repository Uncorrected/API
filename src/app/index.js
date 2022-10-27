import { fileURLToPath } from 'url'
import path from 'path'

import Koa from 'koa'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'

import router from '../router/index.js'
import errHandler from './errHandler.js'

const app = new Koa()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, '../upload')
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: filePath,
        keepExtensions: true
    }
}))
app.use(koaStatic(filePath))
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errHandler)

export default app