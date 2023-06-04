import serviceClass from './../services/factoryService.js';
const service = serviceClass.get()

export default class productController {
    async getProducts(req, res){ 
        service.getProducts()
        .then(prods => {
            return res.json(prods)
        })
    }

    async addProduct(req, res){
        const { name, description, price, stock, thumbnail } = req.body;

        const product = {name,description,price,stock,thumbnail}

        return await res.json(service.addProduct(product))
    }
}