import { Router } from 'express';
import controllerClass from './../controllers/factoryController.js';
const controller = controllerClass.get();

const productsRouter = Router()

productsRouter.get('/', controller.getProducts)
productsRouter.post('/', controller.addProduct)

export default productsRouter;