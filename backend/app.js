import express from "express"
import db from "./config/database.js"
import productRoutes from "./routes/web.js"
import cors from "cors"

const app = express()
try {
    await db.authenticate()
    console.log("Connection database success");
} catch (error) {
    console.log("Connection database error : ",error);
}

app.use(cors())
app.use(express.json())
app.use('/product',productRoutes)

app.listen(5000,() =>console.log('server running in port 5000'))