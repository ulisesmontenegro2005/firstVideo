import { Router } from 'express';
import controllerClass from './../controllers/factoryController.js';
const controller = controllerClass.get();

const productsRouter = Router()

productsRouter.get('/', controller.getProducts)
productsRouter.get('/:id', controller.getProductById)
productsRouter.post('/', controller.addProduct)
productsRouter.put('/', controller.updateProduct)
productsRouter.delete('/', controller.deleteProduct)

export default productsRouter;