const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const { BASE_URL } = process.env;

const nodemailer = require("nodemailer");
require("dotenv").config();
// const { META_PASSWORD } = process.env;
const nodemailerConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "henri33@ethereal.email",
    pass: "rMuMKpPcRabC7cTEDb",
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(401, "Email already verify");
  }

  const verifyEmail = {
    to: email,
    from: "henri33@ethereal.email",
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await transport
    .sendMail(verifyEmail)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

  res.json({
    message: "Verify email send success",
  });
};

module.exports = resendVerifyEmail;
