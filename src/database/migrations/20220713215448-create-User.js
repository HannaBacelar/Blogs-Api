'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        type: Sequelize.STRING,
        field: 'display_name'
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
      image: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Users');
  },
};
