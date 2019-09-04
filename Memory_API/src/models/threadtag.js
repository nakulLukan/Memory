'use strict';
module.exports = (sequelize, DataTypes) => {
  const ThreadTag = sequelize.define('ThreadTag', {
    threadId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ThreadTag.associate = function(models) {
    ThreadTag.hasOne(models.Thread,{
      foriegnKey: 'id'
    });
    ThreadTag.hasOne(models.Tag,{
      foriegnKey: 'id'
    });
  };
  return ThreadTag;
};