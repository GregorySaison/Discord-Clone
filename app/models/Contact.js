const { DataTypes, Model } = require("sequelize");
const sequelize = require("./../sequelize");

class Contact extends Model {}

Contact.init(
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
    tableName: "contact",
  }
);

module.exports = Contact;
