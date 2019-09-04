'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attachment = sequelize.define('Attachment', {
    src: DataTypes.STRING,
    data: DataTypes.STRING,
    commentId: DataTypes.INTEGER,
    attachmentTypeId: DataTypes.INTEGER
  }, {});
  Attachment.associate = function(models) {
    Attachment.hasOne(models.AttachmentType,{
      foriegnKey: 'id'
    });
  };
  return Attachment;
};