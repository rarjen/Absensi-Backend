const { Academic_years } = require("../../models");
const { Op } = require("sequelize");

const activateStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Academic_years.update(
      {
        status: false,
      },
      {
        where: {
          [Op.not]: {
            id: req.params.id,
          },
        },
      }
    );
    const activate = await Academic_years.update(
      {
        status: true,
      },
      {
        where: {
          id
        },
      }
    );

    return res.status(200).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 200,
        message: "Tahun pelajaran berhasil di aktifkan",
        data: activate
      });
  } catch (error) {
    next(error);
  }
};

module.exports = activateStatus;