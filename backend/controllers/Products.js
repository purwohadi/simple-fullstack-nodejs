import Product from "../models/productModel.js"

/**mendapatkan semua data product */
export const getAllProducts = async (req, res)=>{
    try {
        const products = await Product.findAll() 
        res.json(products) 
    } catch (error) {
        res.json({message: error.message})
    }
}

/**mendapatkan data product by id */
export const getProductsById = async (req, res)=>{
    try {
        const products = await Product.findAll({
            where: {
                id : req.params.id
            }
        }) 
        res.json(products[0]) 
    } catch (error) {
        res.json({message: error.message})
    }
}

/**menambahkan data product */
export const createProduct = async (req, res)=>{
    try {
        await Product.create(req.body) 
        res.json({"message" : "Product Berhasil Ditambahkan"}) 
    } catch (error) {
        res.json({message: error.message})
    }
}

/**mengubah data product by id */
export const updateProduct = async (req, res)=>{
    try {
        await Product.update(req.body,{
            where:{
                id: req.params.id
            }
        }) 
        res.json({"message" : "Product Berhasil Diubah"}) 
    } catch (error) {
        res.json({message: error.message})
    }
}

/**mengahapus data product by id */
export const deleteProduct = async (req, res)=>{
    try {
        await Product.destroy({
            where:{
                id: req.params.id
            }
        }) 
        res.json({"message" : "Product Berhasil Dihapus"}) 
    } catch (error) {
        res.json({message: error.message})
    }
}