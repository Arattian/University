const models = require("../models");
const { Classes, Teachers } = models;

function addClass(req, res) {
  Classes.create({name: req.body.data.name, teacherId: req.body.data.teacherId})
    .then((raw) => res.json({statusCode: 200, success: true, id: raw.id}))
    .catch(error => res.json({statusCode: 403, success: false}))
}

function editClass(req,res) {
  Classes.update({
    name: req.body.data.name,
    teacherId: req.body.data.teacherId,
  }, {where: {id: req.body.id}})
    .then(() => res.json({statusCode: 200, success: true}))
    .catch(err => res.json({statusCode: 403, success: false}));
}

function deleteClass(req, res) {
  Classes.destroy({where: {id: req.body.id}})
  .then(() => res.json({statusCode: 200, success: true}))
  .catch(err => res.json({statusCode: 403, success: false}));
}

function currentClass(req, res) {
  Classes.findById(req.body.id, {
    include: [{model: Teachers}],
    attributes: ['id', 'name', 'teacherId'],
  })
  .then(classToSend => {
    res.json(classToSend);
  })
  .catch(err => res.json({status: 403, text: 'Something went wrong'}));
}

function allClasses(req, res) {
  Classes.findAll({
    include: [{ model: Teachers}],
    attributes: ['id', 'name']
  })
  .then(classList => res.json(classList))
  .catch(err => res.json({status: 403, text: 'Something went wrong'}))
}

module.exports =  {
  addClass,
  editClass,
  deleteClass,
  currentClass,
  allClasses,
};