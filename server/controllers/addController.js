const models = require("../models");

function addClass(req, res) {
  models.Classes.create({name: req.body.name, teacherId: req.body.teacherId})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addTeacher(req, res) {
  models.Teachers.create({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addStudent(req, res) {
  models.Students.create({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, classId: req.body.classId})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addCourse(req, res) {
  models.Courses.create({
    name: req.body.name, 
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    start: req.body.start, 
    end: req.body.end, 
    teacherId: req.body.teacherId,
    classId: req.body.classId,
  })
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

module.exports =  {
  addClass,
  addTeacher,
  addStudent,
  addCourse
};