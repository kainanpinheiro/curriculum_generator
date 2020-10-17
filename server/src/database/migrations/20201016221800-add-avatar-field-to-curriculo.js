'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('curriculos', 'image_id', {
      type: Sequelize.INTEGER,
      references: { model: 'images', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('curriculos', 'image_id');
  },
};
