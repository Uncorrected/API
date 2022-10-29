import Goods from '../model/goods.model.js'

class GoodsService {
    async createGoods(goods) {
        const res = await Goods.create(goods)
        return res.dataValues
    }
}

export default new GoodsService