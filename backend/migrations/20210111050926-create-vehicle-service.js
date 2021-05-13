'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vehicleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Vehicles",
          key: "id"
        },
        onDelete: "cascade",
      },
      serviceType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      milage: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      nextService: {
        allowNull: true,
        type: Sequelize.STRING
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Services');
  }
};
