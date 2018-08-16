'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {});
  Students.associate = function(models) {
    Students.belongsTo(models.Classes);
  };
  return Students;
};