const models = require("../models");

function addClass(req, res) {
  models.Classes.create({name: req.body.name})
    .then(() => res.json({status: 200, text: 'Successfully added!'}))
    .catch(error => res.json({status: 403, text: 'Something went wrong!'}))
}

function addTeacher(req, res) {
  models.Teachers.create({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age})
    .then(() => res.json({status: 200, text: 'Successfully added!'}))
    .catch(error => res.json({status: 403, text: 'Something went wrong!'}))
}

function addStudent(req, res) {
  models.Students.create({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age})
    .then(() => res.json({status: 200, text: 'Successfully added!'}))
    .catch(error => res.json({status: 403, text: 'Something went wrong!'}))
}

module.exports =  {
  addClass,
  addTeacher,
  addStudent,
};