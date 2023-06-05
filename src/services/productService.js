import daosClass from './../model/DAOs/daos.js'
const daos = new daosClass()

export default class productService {
    async getProducts(){
        return await daos.getProducts()
    }

    async getProductById(id){
        return await daos.getProductById(id)
    }

    async addProduct(product){
        return await daos.addProduct(product)
    }

    async updateProduct(product){
        return await daos.updateProduct(product)
    }
    
    async deleteProduct(id){
        return await daos.deleteProduct(id)
    }
}