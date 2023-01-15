const { Classes } = require("../../models");

const show = async (req, res, next) => {
  try {
    const classes = await Classes.findAll();

    if (classes <= 0) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Data Class Kosong",
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
      data: classes,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = show;
