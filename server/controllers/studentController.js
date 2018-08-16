const models = require("../models");
const { Students, Classes } = models;

function addStudent(req, res) {
  Students.create({firstName: req.body.data.firstName, lastName: req.body.data.lastName, age: req.body.data.age, classId: req.body.data.classId})
    .then((raw) => res.json({statusCode: 200, success: true, id: raw.id}))
    .catch(error => res.json({statusCode: 403, success: false}))
}

function editStudent(req, res) {
  Students.update({
    firstName: req.body.data.firstName,
    lastName: req.body.data.lastName,
    age: req.body.data.age,
    classId: req.body.data.classId,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteStudent(req, res) {
  Students.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function currentStudent(req, res) {
  Students.findById(req.body.id, {
    include: [{model: Classes}],
    attributes: ['id', 'firstName', 'lastName', 'age', 'classId'],
  })
  .then(studentToSend => {
    res.json(studentToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function allStudents(req, res) {
  Students.findAll({
    include: [{ model: Classes}],
    attributes: ['id', 'firstName', 'lastName', 'age']
  })
  .then(studentList => res.json(studentList))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}))
}

module.exports =  {
  addStudent,
  editStudent,
  deleteStudent,
  currentStudent,
  allStudents
};