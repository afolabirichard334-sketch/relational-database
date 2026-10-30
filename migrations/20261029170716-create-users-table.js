
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'category', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'General'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts', 'category');
  }
};

