import { DataTypes } from 'sequelize'
import seq from '../db/seq.js'

const Goods = seq.define('zd_goods', {
    goods_name: {
        type: DataTypes.STRING,
        allwNull: false,
        comment: '商品名称',
    },
    goods_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        comment: '商品价格'
    },
    goods_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品数量'
    },
    goods_img: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '商品图片URL'
    }
})

Goods.sync()

export default Goods