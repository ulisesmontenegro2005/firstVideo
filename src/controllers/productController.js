import serviceClass from './../services/factoryService.js';
const service = serviceClass.get()

export default class productController {
    async getProducts(req, res){ 
        service.getProducts()
        .then(prods => {
            return res.json(prods)
        })
        .catch(err => {
            return res.json({'error': err})
        })
    }

    async getProductById(req, res){
        const { _id } = req.params;

        service.getProductById(_id)
        .then(prod => {
            return res.json(prod)
        })
    }

    async addProduct(req, res){
        const { name, description, price, stock, thumbnail } = req.body;

        const product = {name,description,price,stock,thumbnail}

        service.addProduct(product)
        .then(prod => {
            return res.json(prod)
        })
        .catch(err => {
            return res.json({'error': err})
        })
    }

    async updateProduct(req, res){
        const { _id, name, description, price, stock, thumbnail } = req.body;

        const product = {_id,name,description,price,stock,thumbnail}

        service.updateProduct(product)
        .then(newProd => {
            return res.json(newProd)
        })
        .catch(err => {
            return res.json({'error': err})
        })
    }

    async deleteProduct(req, res){
        const { _id } = req.params;

        service.deleteProduct(_id)
        .then(deletedProd => {
            return res.json(deletedProd)
        })
        .catch(err => {
            return res.json({'error': err})
        })
    }
}