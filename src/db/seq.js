import { Sequelize } from 'sequelize'
import env from '../config/config.default.js'
const { MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB } = env

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
})

// try {
//     const res = await seq.authenticate();
//     console.log('连接成功：', res);
// } catch (error) {
//     console.error('连接失败：', error);
// }

export default seq