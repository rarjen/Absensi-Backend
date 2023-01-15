const { Users } = require("../../models");
const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

const register = async (req, res, next) => {
  try {
    const { username, password, thumbnail } = req.body;

    const schema = {
      username: { type: "string" },
      password: { type: "string", min: 6 },
    };

    const check = await v.compile(schema);

    const validate = check({
      email: `${email}`,
      password: `${password}`,
    });

    if (validate.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Password at least 6 characters",
        data: null,
      });
    }

    const userExist = await Users.findOne({ where: { username } });

    if (userExist) {
      return res.status(400).json({
        status: false,
        message: "Username used!",
      });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      username,
      password: passwordHashed,
      thumbnail,
    });

    return res.status(201).json({
      status: true,
      message: "Register Success!",
      data: newUser.username,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
