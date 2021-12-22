import dotenv from 'dotenv';
import express from 'express';
import router from './src/routers/post.router';
import mongoose from 'mongoose';
import fileupload from 'express-fileupload';

dotenv.config();

const PORT: number = (process.env.PORT && +process.env.PORT) || 5000;
const DB: string = `mongodb+srv://fenix:${process.env.PASS}@cluster0.1kxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(express.static('static'));
app.use(express.json());
app.use(fileupload({}))

app.use('/api', router);

const startApp = async () => {
  try {
    mongoose.connect(`${DB}`, (err) => {
      if (err) throw new Error(err.message);

      console.log('Conected to db');
    });

    app.listen(PORT, () => {
      console.log(`App started on PORT: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startApp();
