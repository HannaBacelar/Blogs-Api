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
      userId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      }
    }, 
    {
    timestamps: false,
    })
    //belongsTo -> pertence a um
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: 'user'
        } );
    }
    return BlogPost;
  };
  
  module.exports =  createUserModel;