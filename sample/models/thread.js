'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    status: DataTypes.INTEGER,
    isFavorate: DataTypes.BOOLEAN
  }, {});
  Thread.associate = function(models) {
    Thread.hasMany(models.Comment, {
      foriegnKey: 'threadId'
    });
    Thread.hasMany(models.ThreadTag, {
      foriegnKey: 'threadId'
    });
  };
  return Thread;
};