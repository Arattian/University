const models = require("../models");

function allTables(req, res) {
  const data = {
    classList: [],
    teacherList: [],
    studentList: [],
    courseList: [],
  };
  models.Classes.findAll({
      include: [{ model: models.Teachers}],
      attributes: ['id', 'name']
    })
    .then(classList => {
      data.classList = classList;
      return models.Teachers.findAll({
        attributes: ['id', 'firstname', 'lastname', 'age']
      });
    })
    .then(teacherList => {
      data.teacherList = teacherList;
      return models.Students.findAll({
        include: [{ model: models.Classes}],
        attributes: ['id', 'firstname', 'lastname', 'age']
      });
    })
    .then(studentList => {
      data.studentList = studentList;
      return models.Courses.findAll({
        include: [{model: models.Teachers}, {model: models.Classes}],
        attributes: ['id', 'name', 'start', 'end', 'startTime', 'endTime']
      });
    })
    .then(courseList => {
      data.courseList = courseList;
      res.json(data);
    })
    .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function currentClass(req, res) {
  models.Classes.findById(req.body.id, {
    include: [{model: models.Teachers}],
    attributes: ['id', 'name', 'teacherId'],
  })
  .then(classToSend => {
    res.json(classToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function currentTeacher(req, res) {
  models.Teachers.findById(req.body.id, {
    attributes: ['id', 'firstname', 'lastname', 'age'],
  })
  .then(teacherToSend => {
    res.json(teacherToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function currentStudent(req, res) {
  models.Students.findById(req.body.id, {
    include: [{model: models.Classes}],
    attributes: ['id', 'firstname', 'lastname', 'age', 'classId'],
  })
  .then(studentToSend => {
    res.json(studentToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function currentCourse(req, res) {
  models.Courses.findById(req.body.id, {
    include: [{model: models.Teachers}, {model: models.Classes}],
    attributes: ['id', 'name', 'start', 'end', 'startTime', 'endTime', 'teacherId'],
  })
  .then(courseToSend => {
    res.json(courseToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

module.exports =  {
  allTables,
  currentClass,
  currentTeacher,
  currentStudent,
  currentCourse
};