const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateFieldSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw HttpError(401);
  }

  const updateUser = await User.findByIdAndUpdate(_id, { subscription });
  if (updateUser) {
    const user = await User.findById(_id);
    res.json(user);
  }
};

module.exports = updateFieldSubscription;
