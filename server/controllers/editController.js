const models = require("../models");

function editClass(req,res) {
      models.Classes.findById(req.body.id)
        .then(classToEdit => classToEdit.update({
          name: req.body.data.name,
          teacherId: req.body.data.teacherId,
        }))
        .then(() => res.json({statusCode: 200, status: true}))
        .catch(err => res.json({statusCode: 403, status: false}));
}

function editTeacher(req, res) {
  models.Teachers.findById(req.body.id)
  .then(teacherToEdit => teacherToEdit.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
  }))
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

function editStudent(req, res) {
  models.Students.findById(req.body.id)
  .then(studentToEdit => studentToEdit.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
    classId: req.body.data.classId,
  }))
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

function editCourse(req, res) {
  models.Courses.findById(req.body.id)
  .then(courseToEdit => courseToEdit.update({
    name: req.body.data.name,
    start: req.body.data.start,
    end: req.body.data.end,
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    teacherId: req.body.data.teacherId,
    classId: req.body.data.classId,
  }))
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

module.exports =  {
  editClass,
  editTeacher,
  editStudent,
  editCourse
};