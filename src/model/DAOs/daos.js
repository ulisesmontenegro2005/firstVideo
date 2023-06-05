import products from './../models.js'

export default class daosClass {
    async getProducts(){
        let data;

        data = await products.find({}, {__v:0});

        return data
    }

    async getProductById(id){
        let data;

        data = await products.find({"_id": id}, {__v:0});
        
        return data
    }

    async addProduct(product){
        const newprod = new products(product);
        await newprod.save();

        return product
    }

    async updateProduct(product){
        await products.updateOne({"_id": product.id}, {"name": product.name, "description": product.description, "price": product.price, "stock": product.stock, "thumbnail": product.thumbnail});
        
        return product
    }

    async deleteProduct(id){
        await products.deleteOne({"_id": id});
        
        return "Deleted product with id:"+id
    }
}