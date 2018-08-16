const models = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

function authorization(req, res) {
  models.Users.findOne({
    attributes: ['email', 'password']
  }).then(user => {
    if(user.email === req.body.inputs.mail && bcrypt.compareSync(req.body.inputs.pass, user.password)) {
      jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '10h'}, (err, token) => {
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

module.exports =  {
  authorization,
};