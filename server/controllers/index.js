const models = require("../models");

function allowLogin(req, res) {
  models.Admins.findOne({
    attributes: ['email', 'password']
  }).then(admin => {
    if(admin.email === req.body.mail && admin.password === req.body.pass) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
}

module.exports = {
  allowLogin,
};