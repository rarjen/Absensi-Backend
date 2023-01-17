const { Academic_years } = require("../../models");
const { Op } = require("sequelize");

const createAcademicYear = async (req, res, next) => {
  try {
    const { year, semester, status } = req.body;

    if (!year && !semester && !status) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Field Tidak Boleh Kosong",
      });
    }

    const exist = await Flight.findOne({
      where: {
        [Op.and]: [{ year }, { semester }],
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

    const create = await Academic_years.create({ year, semester, status });

    return res.status(200).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 200,
      message: "Data berhasil ditambahkan",
      data: create,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createAcademicYear;
