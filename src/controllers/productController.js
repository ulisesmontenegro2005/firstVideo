import serviceClass from './../services/factoryService.js';
const service = serviceClass.get()

export default class productController {
    async getProducts(req, res){ 
        await res.json(service.getProducts())
    }
}