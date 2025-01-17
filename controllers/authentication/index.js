const { ctrlWrapper } = require("../../helpers");

const registerUserController = require("./registerUser");
const loginUserController = require("./loginUser");
const getCurrentUserController = require("./getCurrentUser");
const logoutUserController = require("./logoutUser");
const updateSubscriptionFieldController = require("./updateSubscriptionField");
const updateAvatarController = require("./updateAvatar");
const verifyEmailController = require("./verifyEmail");
const resendVerifyEmailController = require("./resendVerifyEmail");

module.exports = {
  registerUser: ctrlWrapper(registerUserController),
  loginUser: ctrlWrapper(loginUserController),
  getCurrentUser: ctrlWrapper(getCurrentUserController),
  logoutUser: ctrlWrapper(logoutUserController),
  updateSubscriptionField: ctrlWrapper(updateSubscriptionFieldController),
  updateAvatar: ctrlWrapper(updateAvatarController),
  verifyEmail: ctrlWrapper(verifyEmailController),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmailController),
};
