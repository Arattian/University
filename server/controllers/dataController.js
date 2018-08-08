const models = require("../models");

function totalData(req, res) {
  const data = {
    classData: [],
    teacherData: [],
    studentData: [],
  };
  models.Classes.findAll()
    .then(classData => {
      data.classData = classData;
      return models.Teachers.findAll();
    })
    .then(teacherData => {
      data.teacherData = teacherData;
      return models.Students.findAll();
    })
    .then(studentData => {
      data.studentData = studentData;
      res.json(data);
    })
    .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function editData(req,res) {
  switch(req.body.dataBelongTo) {
    case 'class':
      models.Classes.findById(req.body.id)
        .then(classToEdit => classToEdit.update({
          name: req.body.refs.name,
          description: req.body.refs.description,
        }))
        .then(() => res.json({status: 200, text: 'Successfully edited'}))
        .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    case 'teacher':
      models.Teachers.findById(req.body.id)
      .then(teacherToEdit => teacherToEdit.update({
        firstname: req.body.refs.firstname,
        lastname: req.body.refs.lastname,
        age: req.body.refs.age,
      }))
      .then(() => res.json({status: 200, text: 'Successfully edited!'}))
      .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    case 'student':
    models.Students.findById(req.body.id)
    .then(teacherToEdit => teacherToEdit.update({
      firstname: req.body.refs.firstname,
      lastname: req.body.refs.lastname,
      age: req.body.refs.age,
    }))
    .then(() => res.json({status: 200, text: 'Successfully edited!'}))
    .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    default:
      res.json({status: 404, text: 'Wrong data'});
  }  
}

function deleteData(req,res) {
  switch(req.body.dataBelongTo) {
    case 'class':
      models.Classes.findById(req.body.id)
      .then(classToDelete => classToDelete.destroy())
      .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
      .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    case 'teacher':
      models.Teachers.findById(req.body.id)
      .then(teacherToDelete => teacherToDelete.destroy())
      .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
      .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    case 'student':
      models.Students.findById(req.body.id)
      .then(studentToDelete => studentToDelete.destroy())
      .then(() => res.json({status: 200, text: 'Successfully deleted!'}))
      .catch(err => res.json({status: 403, text: 'Something went wrong'}));
      break;
    default:
      res.json({status: 404, text: 'Wrong data'});
  }  
}

module.exports =  {
  totalData,
  deleteData,
  editData
};