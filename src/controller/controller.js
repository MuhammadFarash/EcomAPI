import { Product } from "../models/model.js";


export default class ProductController{
    async createProduct(req,res){
        let { name, quantity} = req.body;
        const product = new Product({name,quantity})
        await product.save()
        res.json({ data: { product } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    async listProduct(req,res){
        try {
            const products = await Product.find();
            res.json({ data: { products } });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    async deleteProduct(req,res){
        try {
            const isPresent = await Product.findOne({ _id: req.params.id })
         if(!isPresent) {
            return res.status(404).json({ message: 'Product is not present'})
        }
          await Product.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: 'Product deleted' })
            ///const { _id } = req.params;
            //await Product.findByIdAndDelete(_id);
            //res.json({ data: { message: 'Product deleted' } });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    
    }

    async updateQuantity(req,res){
      try {
        const { id } = req.params;
        const { number } = req.query;
        const product = await Product.findByIdAndUpdate(
          id,
          { $inc: { quantity: parseInt(number) } },
          { new: true }
        );
        res.json({ data: { product, message: 'Updated successfully' } });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    
}