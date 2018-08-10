const models = require("../models");

function addClass(req, res) {
  models.Classes.create({name: req.body.data.name, teacherId: req.body.data.teacherId})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addTeacher(req, res) {
  models.Teachers.create({firstname: req.body.data.firstname, lastname: req.body.data.lastname, age: req.body.data.age})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addStudent(req, res) {
  models.Students.create({firstname: req.body.data.firstname, lastname: req.body.data.lastname, age: req.body.data.age, classId: req.body.data.classId})
    .then(() => res.json({statusCode: 200, status: true}))
    .catch(error => res.json({statusCode: 403, status: false}))
}

function addCourse(req, res) {
  models.Courses.create({
    name: req.body.data.name, 
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    start: req.body.data.start, 
    end: req.body.data.end, 
    teacherId: req.body.data.teacherId,
    classId: req.body.data.classId,
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