'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [{
      name: 'C#',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Angular',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Node_JS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'SQL',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
