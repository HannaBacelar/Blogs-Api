'use strict';

  const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      timestamps: false,
    });
// hasMany -> possui varios 
   User.associate = (models) => {
     User.hasMany(models.BlogPost, {
          foreignKey: 'userId', as: "blogPosts"
   });
   }
    return User;
  };
  module.exports =  createUserModel;
