import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import resepRouter from './routes/resepRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
const api = process.env.API;
const URI_DB = process.env.URI_DB;

/**middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(morgan('tiny'));
app.use(cors());

app.use(`${api}`, resepRouter);

/**connect database */
mongoose.connect(URI_DB, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => console.log(`database connect`))
.catch(error => console.log(error));
/**port */
app.listen(`${PORT}`, () => console.log(`server run di port : ${PORT}`));