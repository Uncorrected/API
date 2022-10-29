import Goods from '../model/goods.model.js'

class GoodsService {
    async createGoods(goods) {
        const res = await Goods.create(goods)
        return res.dataValues
    }
    async updateGoods(goods) {
        const { id, ...newGoods } = goods
        const res = await Goods.update(newGoods, { where: { id } })
        return res[0] ? true : false
    }
}

export default new GoodsService