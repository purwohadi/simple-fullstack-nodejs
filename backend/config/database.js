import {Sequelize} from "sequelize"

const db = new Sequelize("fullstack","root","",{
    host: "localhost",
    dialect: "mysql"
})
db.sync({})

export default db

