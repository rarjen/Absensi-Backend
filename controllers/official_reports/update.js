const { Official_reports } = require("../../models");

const updateReport = async (req, res, next) => {
  try {
    const { report_id } = req.params;
    const { learning_activity_id, academic_year_id, description, date, time } =
      req.body;
    const updateReport = await Official_reports.update(
      { learning_activity_id, academic_year_id, description, date, time },
      { where: { id: report_id } }
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
      data: updateReport,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateReport;
