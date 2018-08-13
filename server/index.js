require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loginRoute = require('./routes/loginRoute');
const adminRoute = require('./routes/adminRoute');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', loginRoute);
app.use('/admin', adminRoute);

app.listen(process.env.PORT);