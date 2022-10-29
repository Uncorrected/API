import Joi from 'joi'

const createGoodsSchema = Joi.object({
    goods_name: Joi.string().required(),
    goods_price: Joi.number().min(0).precision(2).required(),
    goods_num: Joi.number().min(0).integer().required(),
    goods_img: Joi.string().empty('').default('')
})

export {
    createGoodsSchema
}