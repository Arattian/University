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
}

module.exports =  {
  totalData,
};