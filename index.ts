import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const PORT: number = (process.env.PORT && +process.env.PORT) || 5000;

const app = express();

app.listen(PORT, () => {
      console.log(`App started on PORT: ${PORT}`);
});
