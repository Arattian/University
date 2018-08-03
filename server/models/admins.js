'use strict';
module.exports = (sequelize, DataTypes) => {
  var Admins = sequelize.define('Admins', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Admins.associate = function(models) {
    // associations can be defined here
  };
  return Admins;
};