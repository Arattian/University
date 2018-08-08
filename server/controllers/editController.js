const models = require("../models");

function editClass(req,res) {
      models.Classes.findById(req.body.id)
        .then(classToEdit => classToEdit.update({
          name: req.body.data.name,
          teacherId: req.body.data.teacher,
        }))
        .then(() => res.json({status: 200, text: 'Successfully edited'}))
        .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function editTeacher(req, res) {
  models.Teachers.findById(req.body.id)
  .then(teacherToEdit => teacherToEdit.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
  }))
  .then(() => res.json({status: 200, text: 'Successfully edited!'}))
  .catch(err => res.json({status: 403, text: `${err.message}`}));
}

function editStudent(req, res) {
  models.Students.findById(req.body.id)
  .then(teacherToEdit => teacherToEdit.update({
    firstname: req.body.data.firstname,
    lastname: req.body.data.lastname,
    age: req.body.data.age,
    classId: req.body.data.studiesAt,
  }))
  .then(() => res.json({status: 200, text: 'Successfully edited!'}))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

module.exports =  {
  editClass,
  editTeacher,
  editStudent
};