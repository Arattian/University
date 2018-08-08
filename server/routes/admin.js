const express = require('express');
const jwt = require('jsonwebtoken');
const addController = require('../controllers/addController');
const dataController = require('../controllers/dataController');
const router = express.Router();
require('dotenv').config();

router.get('/', getToken, (req, res) => {
    //Verifies if token matches with key and not expired yet
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.sendStatus(404);
        } else {
            dataController.totalData(req, res);
        }
    })
});

router.put('/', getToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.sendStatus(404);
        } else {
            dataController.editData(req, res);
        }
    })
});

router.delete('/', getToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.sendStatus(404);
        } else {
            dataController.deleteData(req, res);
        }
    })
});

router.post('/classes', getToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.json({status: 404, text: 'Permission denied'});
        } else {
            addController.addClass(req, res);
        }
    })
});

router.post('/teachers', getToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.json({status: 404, text: 'Permission denied'});
        } else {
            addController.addTeacher(req, res);
        }
    })
});

router.post('/students', getToken, (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, adminData) => {
        if (err) {
            res.json({status: 404, text: 'Permission denied'});
        } else {
            addController.addStudent(req, res);
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