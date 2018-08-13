const models = require("../models");

function editClass(req,res) {
      models.Classes.update({
        name: req.body.data.name,
        teacherId: req.body.data.teacherId,
      }, {where: {id: req.body.id}})
        .then(() => res.json({statusCode: 200, success: true}))
        .catch(err => res.json({statusCode: 403, success: false}));
}

function editTeacher(req, res) {
  models.Teachers.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function editStudent(req, res) {
  models.Students.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
    classId: req.body.data.classId,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function editCourse(req, res) {
  models.Courses.update({
    name: req.body.data.name,
    start: req.body.data.start,
    end: req.body.data.end,
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    teacherId: req.body.data.teacherId,
    classId: req.body.data.classId,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

module.exports =  {
  editClass,
  editTeacher,
  editStudent,
  editCourse
};