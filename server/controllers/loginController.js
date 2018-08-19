const models = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

function authorization(req, res) {
  models.Users.findOne({
    attributes: ['id', 'userName', 'email', 'password']
  }).then(user => {
    if(user.email === req.body.inputs.mail && bcrypt.compareSync(req.body.inputs.pass, user.password)) {
      jwt.sign({email: user.email, userName: user.userName}, process.env.SECRET_KEY, { expiresIn: '10h'}, (err, token) => {
        if (err) {
          res.json({statusCode: 403, message: 'Something went wrong'});
        }
        res.json({success: true, token, email: user.email, userName: user.userName});
      })
    } else {
      res.json({success: false});
    }
  });
}

function authorizate(req, res) {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
          res.json({statusCode: 401, message: 'Unauthorized. Please sign in.'});;
      } else {
          res.json({success: true, email: user.email, userName: user.userName});
      }
  })
}

module.exports =  {
  authorization,
  authorizate,
};