'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reviewer.belongsTo(models.restaurant, {
        foreignKey: "restaurantID", 
      });
      Reviewer.belongsTo(models.reviewer, {
        foreignKey: "reviewerID",
      })
    }
  }
  Review.init({
    reviewer_id: DataTypes.INTEGER,
    stars: {
    type: sequelize.INTEGER,
    validate: {min: 1, max: 5}
    },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};