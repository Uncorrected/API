import { paramsError, fileUploadError, unsupportedFiletype, publishGoodsError, invalidGoodId, updateGoodsError, offShelvesGoodsError, removeGoodsError } from "../constant/err.type.js"
import Goods from '../service/goods.service.js'

const { createGoods, updateGoods, offShelvesGoods, removeGoods, findGoods } = Goods

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
    async update(ctx, next) {
        try {
            // console.log(ctx.request.body)
            console.log(ctx.params)
            const res = await updateGoods(ctx.params.id, ctx.request.body)
            console.log(res)
            if (!res) {
                ctx.app.emit('error', invalidGoodId, ctx)
                return
            }
            ctx.body = {
                code: "0",
                message: "修改商品信息成功",
                result: null
            }
        } catch (err) {
            console.log(err)
            ctx.app.emit('error', updateGoodsError, ctx)
        }
    }
    // async changeStatus(ctx, next) {
    //     try {
    //         console.log(ctx.params, ctx.body.status)
    //         let res;
    //         if (ctx.bodu.status = 'off') {
    //             res = await offShelvesGoods(ctx.params.id)
    //         } else {
    //             res = await onShelvesGoods(ctx.params.id)
    //         }
    //         // console.log(res)
    //         if (!res) {
    //             ctx.app.emit('error', invalidGoodId, ctx)
    //             return
    //         }
    //         ctx.body = "下架商品成功"
    //     } catch (err) {
    //         console.log(err)
    //         ctx.app.emit('error', offShelvesGoodsError, ctx)
    //     }
    // }
    async remove(ctx, next) {
        try {
            const res = await removeGoods(ctx.params.id)
            console.log(res)
            if (!res) {
                ctx.app.emit('error', invalidGoodId, ctx)
                return
            }
            ctx.body = "删除商品成功"
        } catch (err) {
            console.log(err)
            ctx.app.emit('error', removeGoodsError, ctx)
        }
    }
    async findAll(ctx, next) {
        try {
            const { pageNum, pageSize } = ctx.request.query
            const res = await findGoods(pageNum, pageSize)
            ctx.body = {
                code: '0',
                message: '获取商品列表成功',
                result: res
            }
        } catch (err) {
            console.log(err)
            return
        }
    }
}

export default new GoodsController()