const { Users } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = process.env;

const refresh = async (req, res, next) => {
  try {
    const { token_refresh } = req.body;
    if (jwt.verify(token_refresh, JWT_SECRET_KEY)) {
      const decoded = jwt.decode(token_refresh);
      const payload = {
        id: decoded.id,
        username : decoded.username
      }
      const token_access = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: "10m",
      });
      return res.status(200).json({
        status: true,
        message: "refresh success!",
        data: {
          token_access: token_access,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = refresh;
