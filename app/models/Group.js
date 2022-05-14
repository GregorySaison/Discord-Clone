const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../sequelize");

class Group extends Model {}

Group.init(
  {
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
