
import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

server.get('/api/v1/about', async (req, res) => {
    res.json({ message: 'This is the about page.' });
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});