const models = require("../models");


function deleteClass(req, res) {
  models.Classes.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteTeacher(req,res) {
      models.Teachers.destroy({where: {id: req.body.id}})
      .then(() => res.json({statusCode: 200, success: true}))
      .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteStudent(req, res) {
  models.Students.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteCourse(req, res) {
  models.Courses.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

module.exports =  {
  deleteClass,
  deleteTeacher,
  deleteStudent,
  deleteCourse
};