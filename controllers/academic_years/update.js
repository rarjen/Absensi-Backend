const { Academic_years } = require("../../models");

const updateAcademicYear = async (req, res, next) => {
  try {
    const { academicYear_id } = req.params;
    const { year, semester, status } = req.body;

    const updated = await Academic_years.update(
      { year, semester, status },
      { where: { id: academicYear_id } }
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
      message: "Data berhasil di update",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateAcademicYear;
