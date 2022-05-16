const Group = require("../models");

const groupController = {
  async getAll(__, res, next) {
    try {
      const allGroups = await Group.findAll();

      if (allGroups) {
        return res.json(allGroups);
      }

      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = groupController;
