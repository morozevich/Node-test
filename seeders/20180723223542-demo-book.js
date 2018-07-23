'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Books', [{
        title: 'From Dusk Till Dawn',
        content: 'Murder, blood and vampires..',
        author: 'Tarantino',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: 'Pulp Fiction',
        content: 'Black comedy.',
        author: 'Tarantino',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Books', null, {});
  }
};
