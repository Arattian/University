'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};