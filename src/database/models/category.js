'use strict';

  const createUserModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
    }, {
      timestamps: false,
    })
    
    return Category;
  };
  module.exports =  createUserModel;