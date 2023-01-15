const { Presences, Official_reports, Students } = require("../../models");

const showByIdReport = async (req, res, next) => {
  const { report_id } = req.params;

  const showPresence = await Presences.findAll({
    where: { offical_report_id: report_id },
    include: [
      {
        model: Students,
        as: "student",
      },
    ],
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
    data: showPresence,
  });
};

module.exports = showByIdReport;
