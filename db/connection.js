import mongoose from 'mongoose';
import env from './../config.js'

const connect = async () => {
    console.log("connected to DB");
    let connection = await mongoose.connect(env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default connect;