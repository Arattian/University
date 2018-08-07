'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    name: DataTypes.STRING,
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    classId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {});
  Courses.associate = function(models) {
    Courses.belongsTo(models.Teachers);
    Courses.belongsTo(models.Classes);
  };
  return Courses;
};