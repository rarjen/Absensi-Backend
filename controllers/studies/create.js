const { Studies } = require("../../models");
const { Op } = require("sequelize");

const create = async (req, res, next) => {
  try {
    const { name, class_id } = req.body;

    const exist = await Studies.findOne({
      where: {
        [Op.and]: [{ name }, { class_id }],
      },
    });

    if (exist) {
      return res.status(409).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 409,
        message: "Data Sudah Ada",
      });
    }

    const create = await Studies.create({
      name,
      class_id,
    });

    return res.status(201).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 201,
      message: "Data berhasil ditambahkan",
      data: create,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
