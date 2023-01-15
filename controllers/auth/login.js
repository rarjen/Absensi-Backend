const { Users } = require("../../models");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
const v = new Validator();
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Wrong username or password!",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        status: false,
        message: "Wrong username or password!",
        data: null,
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
      thumbnail: user.thumbnail,
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });

    return res.status(200).json({
      status: true,
      message: "login success!",
      data: {
        username: username,
        token: token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
