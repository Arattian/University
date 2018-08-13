const express = require('express');
const jwt = require('jsonwebtoken');
const addController = require('../controllers/addController');
const tableController = require('../controllers/tableController');
const editController = require('../controllers/editController');
const deleteController = require('../controllers/deleteController');
const router = express.Router();
require('dotenv').config();

router.use(getToken);
router.use(verifyToken);

router.get('/', (req, res) => {
    tableController.allTables(req, res);
});

/*Classes*/
router.post('/classes/edit', (req, res) => {
    tableController.currentClass(req, res);
});

router.post('/classes', (req, res) => {
    addController.addClass(req, res);
});

router.put('/classes/edit', (req, res) => {
    editController.editClass(req, res);
});

router.delete('/classes', (req, res) => {
    deleteController.deleteClass(req, res);
});

/*Teachers*/

router.post('/teachers/edit', (req, res) => {
    tableController.currentTeacher(req, res);
});

router.post('/teachers', (req, res) => {
    addController.addTeacher(req, res);
});

router.put('/teachers/edit', (req, res) => {
    editController.editTeacher(req, res);
});

router.delete('/teachers', (req, res) => {
    deleteController.deleteTeacher(req, res);
});

/*Students*/

router.post('/students/edit', (req, res) => {
    tableController.currentStudent(req, res);
});

router.post('/students', (req, res) => {
    addController.addStudent(req, res);
});

router.put('/students/edit', (req, res) => {
    editController.editStudent(req, res);
});

router.delete('/students', (req, res) => {
    deleteController.deleteStudent(req, res);
});

/*Courses*/

router.post('/courses/edit', (req, res) => {
    tableController.currentCourse(req, res);
});

router.post('/courses', (req, res) => {
    addController.addCourse(req, res);
});

router.put('/courses/edit', (req, res) => {
    editController.editCourse(req, res);
});

router.delete('/courses', (req, res) => {
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