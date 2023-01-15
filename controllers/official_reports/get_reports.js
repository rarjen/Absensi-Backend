const { Official_reports } = require("../../models");

const getReports = async (req, res, next) => {
  try {
    const { learning_activity_id } = req.params;

    const reports = await Official_reports.findAll({
      where: { learning_activity_id },
    });

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
      data: reports,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getReports;
