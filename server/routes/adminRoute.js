const express = require('express');
const jwt = require('jsonwebtoken');
const teacherController = require('../controllers/teacherController');
const classController = require('../controllers/classController');
const studentController = require('../controllers/studentController');
const courseController = require('../controllers/courseController');
const tableController = require('../controllers/tableController');
const router = express.Router();
require('dotenv').config();

router.use(getToken);
router.use(verifyToken);

router.get('/', tableController.tableCount);

/*Classes*/
router.get('/classes', classController.allClasses);

router.post('/classes/edit', classController.currentClass);

router.post('/classes', classController.addClass);

router.put('/classes/edit', classController.editClass);

router.delete('/classes', classController.deleteClass);

/*Teachers*/
router.get('/teachers', teacherController.allTeachers);

router.post('/teachers/edit', teacherController.currentTeacher);

router.post('/teachers', teacherController.addTeacher);

router.put('/teachers/edit', teacherController.editTeacher);

router.delete('/teachers', teacherController.deleteTeacher);

/*Students*/
router.get('/students', studentController.allStudents);

router.post('/students/edit', studentController.currentStudent);

router.post('/students', studentController.addStudent);

router.put('/students/edit', studentController.editStudent);

router.delete('/students', studentController.deleteStudent);

/*Courses*/
router.get('/courses', courseController.allCourses);

router.post('/courses/edit', courseController.currentCourse);

router.post('/courses', courseController.addCourse);

router.put('/courses/edit', courseController.editCourse);

router.delete('/courses', courseController.deleteCourse);

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