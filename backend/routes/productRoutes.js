import express from 'express'
const router = express.Router()
import {protect} from '../middleware/authMiddleware.js'
import {getProducts,getProductById} from '../controllers/productController.js'


router.route('/').post().get(protect,getProducts)
router.route('/:id').get(protect,getProductById)


export default router