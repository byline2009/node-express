"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  Note.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.NUMBER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Note",
    }
  );
  return Note;
};
