import {Request, Response} from 'express'
import productService from '../service/productService'


class ProductController {
    public async createProduct(req: Request, res: Response){
        productService.createProductList(req.body)

        return res.status(201).send()
    }
    

    public async findProduct(req:Request, res:Response){
        const products = await productService.readProductList()

        return res.status(200).json(products)
    }

    public async stockPrice(req:Request, res: Response){
        const productStock = await productService.readStockPrice()

        return res.status(200).json(productStock)
    }
}

    

export default new ProductController()