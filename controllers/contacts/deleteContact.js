const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  console.log("result", result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = deleteById;
