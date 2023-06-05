import serviceClass from './../services/factoryService.js';
const service = serviceClass.get()

export default class productController {
    async getProducts(req, res){ 
        service.getProducts()
        .then(prods => {
            return res.json(prods)
        })
    }

    async getProductById(req, res){
        const { id } = req.params;

        service.getProductById(id)
        .then(prod => {
            return res.json(prod)
        })
    }

    async addProduct(req, res){
        const { name, description, price, stock, thumbnail } = req.body;

        const product = {name,description,price,stock,thumbnail}

        return await res.json(service.addProduct(product))
    }

    async updateProduct(req, res){
        const { id, name, description, price, stock, thumbnail } = req.body;

        const product = {id,name,description,price,stock,thumbnail}

        res.json(service.updateProduct(product))
    }

    async deleteProduct(req, res){
        const { id } = req.body;

        res.json(service.deleteProduct(id))
    }
}