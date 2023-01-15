const { Students } = require("../../models");

const showByIdClass = async (req, res, next) => {
  try {
    const { class_id } = req.params;

    const show = await Students.findAll({ where: { class_id } });

    if (show <= 0) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Data Siswa Kosong",
      });
    }

    return res.status(200).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 200,
      message: "Data berhasil ditampilkan",
      data: show,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = showByIdClass;
