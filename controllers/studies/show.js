const { Studies, Classes } = require("../../models");

const show = async (_req, res, next) => {
  try {
    const studies = await Studies.findAll({
      include: [
        {
          model: Classes,
          as: "class",
        },
      ],
    });

    if (studies <= 0) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Data mata pelajaran tidak ada",
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
      data: studies,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = show;
