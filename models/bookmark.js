'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' }) // go find all the comments with this bookmark id
      this.Tags = this.hasMany(models.Tag, { onDelete: 'cascade' })
    }
  };
  Bookmark.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};