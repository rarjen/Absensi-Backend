const { Learning_activities } = require("../../models");

const show = async (_req, res, next) => {
  try {
    const data = await Learning_activities.findAll();

    if (data <= 0) {
      return res.status(404).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 404,
        message: "Data belum Ada",
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
      message: "Data Berhasil ditampilkan",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = show;