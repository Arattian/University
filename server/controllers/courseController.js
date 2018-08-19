const models = require("../models");
const { Courses, Teachers, Classes } = models;

function addCourse(req, res) {
  Courses.create({
    name: req.body.data.name, 
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    start: req.body.data.start, 
    end: req.body.data.end, 
    teacherId: req.body.data.teacherId,
    classId: req.body.data.classId,
  })
    .then((raw) => res.json({statusCode: 200, success: true, id: raw.id}))
    .catch(error => res.json({statusCode: 403, message: 'Something went wrong'}))
}

function editCourse(req, res) {
  Courses.update({
    name: req.body.data.name,
    start: req.body.data.start,
    end: req.body.data.end,
    startTime: req.body.data.startTime,
    endTime: req.body.data.endTime,
    teacherId: req.body.data.teacherId,
    classId: req.body.data.classId,
  }, {where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, message: 'Something went wrong'}));
}

function deleteCourse(req, res) {
  Courses.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, message: 'Something went wrong'}));
}

function currentCourse(req, res) {
  Courses.findById(req.body.id, {
    include: [{model: Teachers}, {model: Classes}],
    attributes: ['id', 'name', 'start', 'end', 'startTime', 'endTime', 'teacherId', 'classId'],
  })
  .then(courseToSend => {
    res.json(courseToSend);
  })
  .catch(err => res.json({statusCode: 403, message: 'Something went wrong'}));
}

function allCourses(req, res) {
  Courses.findAll({
    include: [{model: Teachers}, {model: Classes}],
    attributes: ['id', 'name', 'start', 'end', 'startTime', 'endTime']
  })
  .then(courseList => res.json(courseList))
  .catch(err => res.json({statusCode: 403, message: 'Something went wrong'}))
}

module.exports =  {
  addCourse,
  editCourse,
  deleteCourse,
  currentCourse,
  allCourses,
};