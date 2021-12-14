import dotenv from 'dotenv';
import express from 'express';
import router from './src/routers/router';
dotenv.config();

const PORT: number = (process.env.PORT && +process.env.PORT) || 5000;

const app = express();

app.use(express.json());

app.use('/api', router)

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App started on PORT: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startApp();
