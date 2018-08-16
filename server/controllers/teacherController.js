const models = require("../models");
const { Teachers, Classes } = models;

function addTeacher(req, res) {
  Teachers.create({firstName: req.body.data.firstName, lastName: req.body.data.lastName, age: req.body.data.age})
    .then((raw) => res.json({statusCode: 200, success: true, id: raw.id}))
    .catch(error => res.json({statusCode: 403, success: false}))
}

function editTeacher(req, res) {
  Teachers.update({
    firstName: req.body.data.firstName,
    lastName: req.body.data.lastName,
    age: req.body.data.age,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteTeacher(req,res) {
  Classes.find({where: {teacherId: req.body.id}})
  .then(finded => {
    if(finded) { 
      res.json({statusCode: 403, success: false, message: 'This teacher have class. Please remove class first.'});
    } else {
        Teachers.destroy({where: {id: req.body.id}})
        .then(() => res.json({statusCode: 200, success: true}))
        .catch(err => res.json({statusCode: 403, success: false}));
    }
  })
}

function currentTeacher(req, res) {
  Teachers.findById(req.body.id, {
    attributes: ['id', 'firstName', 'lastName', 'age'],
  })
  .then(teacherToSend => {
    res.json(teacherToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function allTeachers(req, res) {
  Teachers.findAll({
    attributes: ['id', 'firstName', 'lastName', 'age']
  })
  .then(teacherList => res.json(teacherList))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}))
}

module.exports =  {
  addTeacher,
  editTeacher,
  deleteTeacher,
  currentTeacher,
  allTeachers,
};