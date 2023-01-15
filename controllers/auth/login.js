const { Users } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Wrong username!",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    // console.log(match);
    if (!match) {
      return res.status(400).json({
        status: false,
        message: "Wrong Password!",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
      thumbnail: user.thumbnail,
    };

    const token_access = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: "10m",
    });
    const token_refresh = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      status: true,
      message: "login success!",
      data: {
        username: username,
        token_access: token_access,
        token_refresh: token_refresh,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;