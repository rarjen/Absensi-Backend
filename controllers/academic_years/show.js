const { Academic_years } = require("../../models");

const showAcademicYear = async (req, res, next) => {
  try {
    const showAcademic = await Academic_years.findAll();

    if (showAcademic <= 0) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Data Academic Year Tidak Ada",
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
      data: showAcademic,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = showAcademicYear;
