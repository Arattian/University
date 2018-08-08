const models = require("../models");


function deleteClass(req, res) {
  models.Classes.findById(req.body.id)
  .then(classToDelete => classToDelete.destroy())
  .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function deleteTeacher(req,res) {
      models.Teachers.findById(req.body.id)
      .then(teacherToDelete => teacherToDelete.destroy())
      .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
      .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function deleteStudent(req, res) {
  models.Students.findById(req.body.id)
  .then(studentToDelete => studentToDelete.destroy())
  .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

module.exports =  {
  deleteClass,
  deleteTeacher,
  deleteStudent
};