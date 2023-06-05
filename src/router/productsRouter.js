import { Router } from 'express';
import controllerClass from './../controllers/factoryController.js';
const controller = controllerClass.get();

const productsRouter = Router()

productsRouter.get('/', controller.getProducts)
productsRouter.get('/:_id', controller.getProductById)
productsRouter.post('/', controller.addProduct)
productsRouter.put('/', controller.updateProduct)
productsRouter.delete('/:_id', controller.deleteProduct)

export default productsRouter;