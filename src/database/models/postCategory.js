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
      underscored: true,
      timestamps: false,
      tableName: 'PostCategories'
    });
    // belongsToMany -> pertence a varios
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'postsCategories',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
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