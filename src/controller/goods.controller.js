import { paramsError, fileUploadError, unsupportedFiletype } from "../constant/err.type.js"

class GoodsController {
    async upload(ctx, next) {
        // console.log(ctx.request.files)
        const { files } = ctx.request
        // console.log(files)
        if (!files) {
            ctx.app.emit('error', paramsError, ctx)
            return
        }
        const fileType = ['image/jpeg', 'image/png']
        if (!files.img) {
            ctx.app.emit('error', fileUploadError, ctx)
            return
        }
        if (!fileType.includes(files.img.type)) {
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
}

export default new GoodsController()