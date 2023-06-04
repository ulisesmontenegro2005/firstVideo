import { Router } from 'express';
import controllerClass from './../controllers/factoryController.js';
const controller = controllerClass.get();

const productsRouter = Router()

productsRouter.get('/', controller.getProducts)

export default productsRouter;