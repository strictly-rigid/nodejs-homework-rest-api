const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "emailer-project@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const { nanoid } = require("nanoid");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    from: "emailer-project@meta.ua",
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`,
  };

  await transport
    .sendMail(verifyEmail)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));

  console.log(newUser);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;
