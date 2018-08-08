const models = require("../models");

function totalData(req, res) {
  const data = {
    classData: [],
    teacherData: [],
    studentData: [],
  };
  models.Classes.findAll({
    include: [
    { model: models.Teachers,
    }
 ]})
    .then(classData => {
      data.classData = classData;
      return models.Teachers.findAll();
    })
    .then(teacherData => {
      data.teacherData = teacherData;
      return models.Students.findAll({
        include: [
        { model: models.Classes,
          required: true
        }
     ]});
    })
    .then(studentData => {
      data.studentData = studentData;
      res.json(data);
    })
    .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function currentClass(req, res) {
  console.log(req.body);
  models.Classes.findById(req.body.id)
  .then(classToSend => {
    console.log(classToSend);
    res.json(classToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

module.exports =  {
  totalData,
  currentClass
};