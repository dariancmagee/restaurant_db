'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reviewer.hasMany(models.restaurant, {
        foreignKey: "restaurant_id" 
      });
    }
  }
  Reviewer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    karma: {
      type: Sequelize.INTEGER,
      validate: {min: 0, max: 7}
    }, 
    sequelize,
    modelName: 'Reviewer',
  });
  return Reviewer;
};