import express from 'express';
import mongoose from 'mongoose';
import { config } from './.config';

const app = express();
app.use(express.json());


app.get('/api/example', (req, res) => {
  res.json({
    "message": "hello"
  });
})


app.listen(config.port, () => {
  console.log(`listening on: ${config.host}/${config.port}`)
})

