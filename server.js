require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const port = process.env.APP_PORT || 8080;
const host = process.env.APP_HOST || '127.0.0.1';

const router = require('./backend-app/routes/product.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(port, host); 

console.log(`Ejecutando servidor en ${host}:${port}`);