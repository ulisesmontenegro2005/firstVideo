import daosClass from './../model/DAOs/daos.js'
const daos = new daosClass()

export default class productService {
    async getProducts(){
        return await daos.getProducts()
    }
}