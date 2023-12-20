import express from 'express';
import mongoose from 'mongoose';
import { connectUsingMongoose } from './src/config/mongoos.js';
import router from './src/routes/router.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/product',router);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectUsingMongoose();
  });