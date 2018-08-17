'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userName: process.env.ADMIN_NAME,
        email: process.env.ADMIN_MAIL,
        password: bcrypt.hashSync(process.env.ADMIN_PASS, 8),
        createdAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};