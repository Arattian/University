const models = require("../models");


function deleteClass(req, res) {
  models.Classes.findById(req.body.id)
  .then(classToDelete => classToDelete.destroy())
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

function deleteTeacher(req,res) {
      models.Teachers.findById(req.body.id)
      .then(teacherToDelete => teacherToDelete.destroy())
      .then(() => res.json({statusCode: 200, status: true}))
      .catch(err => res.json({statusCode: 403, status: false}));
}

function deleteStudent(req, res) {
  models.Students.findById(req.body.id)
  .then(studentToDelete => studentToDelete.destroy())
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

function deleteCourse(req, res) {
  models.Courses.findById(req.body.id)
  .then(courseToDelete => courseToDelete.destroy())
  .then(() => res.json({statusCode: 200, status: true}))
  .catch(err => res.json({statusCode: 403, status: false}));
}

module.exports =  {
  deleteClass,
  deleteTeacher,
  deleteStudent,
  deleteCourse
};