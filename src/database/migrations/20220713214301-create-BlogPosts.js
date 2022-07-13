'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING
      },
     userId: {
        type: Sequelize.STRING,
        allowNull: false,
        filed:'user_id',
        references: {
          models: 'user', //verificar
          key: 'id'
        }
      },    
      published: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
    });
  },
  
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('BlogPosts');
  },
};
