'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {});
  Students.associate = function(models) {
    Students.belongsTo(models.Classes);
  };
  return Students;
};