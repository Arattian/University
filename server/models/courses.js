'use strict';
module.exports = (sequelize, DataTypes) => {
  var Courses = sequelize.define('Courses', {
    name: DataTypes.STRING,
    start: DataTypes.DATEONLY,
    end: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    classId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {});
  Courses.associate = function(models) {
    Courses.belongsTo(models.Teachers);
    Courses.belongsTo(models.Classes);
  };
  return Courses;
};