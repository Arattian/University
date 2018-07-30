require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
    res.end();
});

app.listen(process.env.PORT);