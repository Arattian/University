const models = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();

function loginController(req, res) {
  models.Admins.findOne({
    attributes: ['email', 'password']
  }).then(admin => {
    if(admin.email === req.body.mail && admin.password === req.body.pass) {
      jwt.sign({admin}, process.env.SECRET_KEY, { expiresIn: '10h'}, (err, token) => {
        if (err) {
          res.sendStatus(403);
        }
        res.json({result: true, token});
      })
    } else {
      res.json({result: false});
    }
  });
}

module.exports =  loginController;