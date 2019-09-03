'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attachments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      src: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING.BINARY
      },
      commentId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Comments',
          key: 'id'
        }
      },
      attachmentTypeId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'AttachmentTypes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Attachments');
  }
};