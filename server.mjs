
import express from 'express';
import userRouter from './src/routes/user.mjs';
import productRouter from './src/routes/product.mjs';

const server = express();

server.use('/api/v1/users', userRouter);
server.use('/api/v1/products', productRouter);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});