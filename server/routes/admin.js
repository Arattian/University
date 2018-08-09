const express = require('express');
const jwt = require('jsonwebtoken');
const addController = require('../controllers/addController');
const dataController = require('../controllers/dataController');
const editController = require('../controllers/editController');
const deleteController = require('../controllers/deleteController');
const router = express.Router();
require('dotenv').config();

router.get('/', getToken, verifyToken, (req, res) => {
    dataController.totalData(req, res);
});

/*Classes*/
router.post('/classes/edit', getToken, verifyToken, (req, res) => {
    dataController.currentClass(req, res);
});

router.post('/classes', getToken, verifyToken, (req, res) => {
    addController.addClass(req, res);
});

router.put('/classes/edit', getToken, verifyToken, (req, res) => {
    editController.editClass(req, res);
});

router.delete('/classes', getToken, verifyToken, (req, res) => {
    deleteController.deleteClass(req, res);
});

/*Teachers*/

router.post('/teachers/edit', getToken, verifyToken, (req, res) => {
    dataController.currentTeacher(req, res);
});

router.post('/teachers', getToken, verifyToken, (req, res) => {
    addController.addTeacher(req, res);
});

router.put('/teachers/edit', getToken, verifyToken, (req, res) => {
    editController.editTeacher(req, res);
});

router.delete('/teachers', getToken, verifyToken, (req, res) => {
    deleteController.deleteTeacher(req, res);
});

/*Students*/

router.post('/students/edit', getToken, verifyToken, (req, res) => {
    dataController.currentStudent(req, res);
});

router.post('/students', getToken, verifyToken, (req, res) => {
    addController.addStudent(req, res);
});

router.put('/students/edit', getToken, verifyToken, (req, res) => {
    editController.editStudent(req, res);
});

router.delete('/students', getToken, verifyToken, (req, res) => {
    deleteController.deleteStudent(req, res);
});

/*Courses*/

router.post('/courses/edit', getToken, verifyToken, (req, res) => {
    dataController.currentCourse(req, res);
});

router.post('/courses', getToken, verifyToken, (req, res) => {
    addController.addCourse(req, res);
});

router.put('/courses/edit', getToken, verifyToken, (req, res) => {
    editController.editCourse(req, res);
});

router.delete('/courses', getToken, verifyToken, (req, res) => {
    deleteController.deleteCourse(req, res);
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
        res.sendStatus(401);
    }
}

function verifyToken(req, res, next) {
    jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
        if (err) {
            res.sendStatus(401);
        } else {
            next();
        }
    })
}

module.exports = router;