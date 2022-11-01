import Goods from '../model/goods.model.js'

class GoodsService {
    async createGoods(goods) {
        const res = await Goods.create(goods)
        return res.dataValues
    }
    async updateGoods(id, goods) {
        // console.log(id, goods)
        const res = await Goods.update(goods, { where: { id } })
        return res[0] ? true : false
    }
    async offShelvesGoods(id) {
        const res = await Goods.destroy({ where: { id } })
        console.log(res)
        return res ? true : false
    }
    async removeGoods(id) {
        const res = await Goods.destroy({ where: { id }, force: true })
        console.log(res)
        return res ? true : false
    }
    async findGoods(pageNum, pageSize) {
        // const count = await Goods.count()
        // const offset = (pageNum - 1) * pageSize
        // const limit = Number(pageSize)
        // const rows = await Goods.findAll({ offset, limit })

        const offset = (pageNum - 1) * pageSize
        const limit = Number(pageSize)
        const { count, rows } = await Goods.findAndCountAll({ offset, limit })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows
        }
    }
}

export default new GoodsService