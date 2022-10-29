import { paramsError, fileUploadError, unsupportedFiletype, publishGoodsError } from "../constant/err.type.js"
import Goods from '../service/goods.service.js'

const { createGoods } = Goods

class GoodsController {
    async upload(ctx, next) {
        // console.log(ctx.request.files)
        const { files } = ctx.request
        // console.log(files.img.mimetype)
        if (!files) {
            ctx.app.emit('error', paramsError, ctx)
            return
        }
        const fileType = ['image/jpeg', 'image/png']
        if (!files.img) {
            ctx.app.emit('error', fileUploadError, ctx)
            return
        }
        if (!fileType.includes(files.img.mimetype)) {
            ctx.app.emit('error', unsupportedFiletype, ctx)
            return
        }
        // console.log(fileName)
        ctx.body = {
            code: '0',
            messages: '上传图片成功',
            result: {
                goodsUrl: files.img.newFilename
            }
        }
    }

    async create(ctx, next) {
        try {
            const { createdAt, updatedAt, ...res } = await createGoods(ctx.request.body)
            console.log(res)
            ctx.body = {
                code: '0',
                message: '商品上传成功',
                result: res
            }
        } catch (err) {
            console.log(err)
            ctx.app.emit('error', publishGoodsError, ctx)
            return
        }
    }
}

export default new GoodsController()