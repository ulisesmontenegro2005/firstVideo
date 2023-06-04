import products from './../models.js'

export default class daosClass {
    async getProducts(){
        return await products.find({});
    }

    async addProduct(product){
        const newprod = new products(product);
        await newprod.save();

        return newprod;
    }
}