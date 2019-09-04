'use strict';
module.exports = (sequelize, DataTypes) => {
  const AttachmentType = sequelize.define('AttachmentType', {
    type: DataTypes.STRING,
  }, {});
  AttachmentType.associate = function(models) {
    
  };
  return AttachmentType;
};