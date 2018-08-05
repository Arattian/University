const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

router.get('/', getToken, (req, res) => {
    //Verifies if token matches with key and not expired yet
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.json('Coming soon...');
        }
    })
});

//Checks if token exists in header and saving it in req.token
function getToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(404);
    }
}

module.exports = router;