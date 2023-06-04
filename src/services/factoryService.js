import productService from './productService.js';

export default class serviceClass {
    static get() {
        return new productService()
    }
}
