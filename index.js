import express from 'express';
import {bootstrap} from './app.controller.js';
import dotenv from "dotenv"
dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;
// call function bootstrap to setup app
await bootstrap(app, express);


app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});