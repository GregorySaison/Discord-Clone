const Contact = require("./Contact");
const Group = require("./Group");

Group.hasMany(Contact, {
  foreignKey: "group_id",
  as: "contact",
});

Contact.belongsTo(Group, {
  foreignKey: "group_id",
  as: "group",
});

module.exports = { Contact, Group };
