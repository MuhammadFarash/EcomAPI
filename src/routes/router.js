import express from 'express';
import ProductController from '../controller/controller.js';

const router = express.Router()

const productController = new ProductController()

router.post('/create', (req,res,)=>{
    productController.createProduct(req,res)
});

router.get('/', (req,res,)=>{
    productController.listProduct(req,res)
});
router.delete('/:id', (req,res,)=>{
    productController.deleteProduct(req,res)
});
router.post('/:id/update_quantity', (req,res,)=>{
    productController.updateQuantity(req,res)
});


export default router;