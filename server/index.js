import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoute.js';
import dalleRoutes from './routes/dalleRoute.js';

dotenv.config();

const app = express();

app
    .use(cors())
    .use(express.json({ limit: '50mb' }));

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from Dall-E');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => {
            console.log('Server started on port 8080');
        })
    } catch (error) {
        console.log(error);
    }
}


startServer();