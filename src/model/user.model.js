import { DataTypes } from 'sequelize'
import seq from '../db/seq.js'

//创建模型
const User = seq.define('zd_user', {
    //id 会被sequelize自动创建
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '是否为管理员，0（默认）：不是管理员，1：是管理员'
    }
})

// User.sync()

export default User