'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'post_id',
    references: {
      models: '', //INSERIR
      key: 'id'
    },
    primaryKey: true,
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'category_id',
      references: {
      models: '', //INSERIR
      key: 'id' 
},
primaryKey: true,

    }
  }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostsCategories');
  },
};
