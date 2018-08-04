require('dotenv').config();
const express = require('express');
const cors = require('cors');
const login = require('./routes/login');
const admin = require('./routes/admin');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', login);
app.use('/admin', admin);

app.listen(process.env.PORT);