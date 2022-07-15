'use strict';

  const createUserModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.DATE,
      published: DataTypes.DATE,
      updated: DataTypes.DATE     
    }, {
      underscored: true,
      timestamps: false,
      tableName: 'BlogPosts'
    });
    //belongsTo -> pertence a um
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: "users"
        } );
    }
    return BlogPost;
  };
  module.exports =  createUserModel;