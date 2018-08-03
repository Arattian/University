const models = require("../models");

models.Admins.findOne({
  attributes: ['email', 'password']
}).then(admin => {
  console.log(admin.password);
});
