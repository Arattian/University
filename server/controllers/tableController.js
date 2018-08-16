const models = require("../models");
const { Classes, Teachers, Students, Courses } = models;

function tableCount(req, res) {
  const raws = {
    classCount: 0,
    teacherCount: 0,
    studentCount: 0,
    courseCount: 0,
  }
  Classes.count()
    .then(count => {
      raws.classCount = count;
      return Teachers.count();
    })
    .then(count => {
      raws.teacherCount = count;
      return Students.count();
    })
    .then(count => {
      raws.studentCount = count;
      return Courses.count();
    })
    .then(count => {
      raws.courseCount = count;
      res.json(raws);
    })
    .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

module.exports =  {
  tableCount,
};