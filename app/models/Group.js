const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../sequelize");

class Group extends Model {}

Group.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    illustration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "group",
  }
);

module.exports = Group;
