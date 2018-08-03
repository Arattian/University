require('dotenv').config();
const express = require('express');
const cors = require('cors');
const controller = require('./controllers');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    controller.allowLogin(req, res);
});

app.listen(process.env.PORT);