import express from 'express'
const router = express.Router()
import {admin, protect} from '../middleware/authMiddleware.js'
import {getProducts,getProductById, createProduct, createProductReview, getTopProducts, deleteProduct, updateProduct} from '../controllers/productController.js'


router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)
router.route('/:id').get(getProductById)
                    .delete(protect,admin,deleteProduct)
                    .put(protect,admin,updateProduct)


export default router