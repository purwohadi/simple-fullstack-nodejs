import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Product = db.define('products', {
    title:{type: Sequelize.STRING},
    price:{type: Sequelize.DOUBLE}
}, {
    freezeTableName: true
})

export default Product
