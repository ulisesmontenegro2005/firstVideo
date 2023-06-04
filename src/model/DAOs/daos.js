import products from './../models.js'

export default class daosClass {
    async getProducts(){
        let data;

        data = await products.find({}, {__v:0});

        return data;
    }

    async addProduct(product){
        const newprod = new products(product);
        await newprod.save();

        return product;
    }
}