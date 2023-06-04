import productController from './productController.js';

export default class controllerClass {
    static get() {
        return new productController()
    }
}
