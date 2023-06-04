import express from  'express';
import compression from 'compression';
import productsRouter from './src/router/productsRouter.js';
import env from './config.js'
const app = express();

app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/products', productsRouter);

const PORT = env.PORT;
app.listen(PORT, () => {
    console.log('Server listening in port: '+PORT)
})