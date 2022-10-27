import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import Router from '@koa/router'
const router = new Router()

const __filename = fileURLToPath(import.meta.url)
// console.log(__filename)
const __dirname = dirname(__filename)
// console.log(__dirname)
fs.readdirSync(__dirname).forEach(async file => {
    // console.log(file)
    if (file !== 'index.js') {
        let r = await import('./' + file)
        // console.log(r.default)
        router.use(r.default.routes())
    }
})

export default router