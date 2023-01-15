const { Official_reports } = require("../../models");

const deleteReport = async (req, res, next) => {
  try {
    const { report_id } = req.params;

    const deleteReport = await Official_reports.destroy({
      where: { id: report_id },
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
      message: "Data berhasil di hapus",
      data: deleteReport,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteReport;
