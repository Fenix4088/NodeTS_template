import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const PORT: number = (process.env.PORT && +process.env.PORT) || 5000;

const app = express();

app.get('/', (req, res) => {
  console.log(req.query);

  res.status(200).json('Server is working11!');
});

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App started on PORT: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};
