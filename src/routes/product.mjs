import { Router } from "express";
import { products } from "../data/produc-info.mjs";

const productRouter = Router();

// get all products
productRouter.get('/', (req, res) => {
    res.status(200).json({
        message: "Product Data",
        data: products,
    });
});

// get product by id
productRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === parseInt(id));
    if (product) {
        res.status(200).json({
            message: "Product Data",
            data: product,
        });
    } else {
        res.status(404).json({
            message: "Product not found",
        });
    }
});

export default productRouter;