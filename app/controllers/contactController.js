const { Contact } = require("../models");

const contactController = {
  async getAllByGroup(req, res, next) {
    try {
      const contact = await Contact.findAll({
        where: {
          group_id: req.params.id,
        },
      });

      if (contact) {
        return res.json(contact);
      }

      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = contactController;
