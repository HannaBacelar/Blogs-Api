'use strict';

  const createUserModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      categoryId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
        
    }, {
      timestamps: false,
    });
    // belongsToMany -> pertence a varios
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'postsCategories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      };
    return PostCategory;
  };
  module.exports =  createUserModel;

  //ModelDeAssociação.associate = (models) => {
//   models.ModelFonte.belongsToMany(models.ModelAlvo, {
//     as: 'apelido_da_associação',
//     through: ModelDeAssociação,
//     foreignKey: 'id_da_fonte_na_tabela_da_associação',
//     otherKey: 'id_do_alvo_na_tabela_da_associação',
//   });