'use strict';
require('dotenv').config();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [{
        email: process.env.ADMIN_MAIL,
        password: process.env.ADMIN_PASS,
        createdAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};