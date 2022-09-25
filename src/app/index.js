import Koa from 'koa'
const app = new Koa()

import koaBody from 'koa-body'
app.use(koaBody())

import userRouter from '../router/user.route.js'
app.use(userRouter.routes())

import errHandler from './errHandler.js'
app.on('error', errHandler)

export default app