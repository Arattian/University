'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teachers = sequelize.define('Teachers', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Teachers.associate = function(models) {
    // associations can be defined here
  };
  return Teachers;
};