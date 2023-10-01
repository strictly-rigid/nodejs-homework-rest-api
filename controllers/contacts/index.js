const { ctrlWrapper } = require("../../helpers");

const getAllController = require("./getAllContacts");
const getByIdController = require("./getContactById");
const addContactController = require("./addContact");
const updateByIdController = require("./updateContact");
const updateStatusContactController = require("./updateStatusContact");
const deleteByIdController = require("./deleteContact");

module.exports = {
  getAll: ctrlWrapper(getAllController),
  getById: ctrlWrapper(getByIdController),
  add: ctrlWrapper(addContactController),
  updateById: ctrlWrapper(updateByIdController),
  updateStatusContact: ctrlWrapper(updateStatusContactController),
  deleteById: ctrlWrapper(deleteByIdController),
};
