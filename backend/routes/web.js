import express from "express"
import { getAllProducts, createProduct, getProductsById, updateProduct, deleteProduct } from "../controllers/Products.js"

const router = express.Router()

router.get('/',getAllProducts)
router.get('/:id',getProductsById)
router.post('/',createProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)


// router.get('/',(req, res)=>{
//     res.send('welcome hello world')
// })

export default router