'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    threadId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.hasOne(models.Thread,{
      foriegnKey: 'id'
    });
    Comment.hasMany(models.Attachment,{
      foriegnKey: 'commentId'
    });
  };
  return Comment;
};