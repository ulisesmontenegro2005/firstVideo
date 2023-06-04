import mongoose from 'mongoose';
const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    thumbnail: String
})

const products = mongoose.model(productsCollection, productsSchema);

export default products;