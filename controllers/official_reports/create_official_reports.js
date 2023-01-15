const { Official_reports, Academic_years } = require("../../models");

const createReport = async (req, res, next) => {
  try {
    const { learning_activity_id, description, date, time } = req.body;

    const active = await Academic_years.findOne({ where: { status: true } });

    const create = await Official_reports.create({
      learning_activity_id,
      academic_year_id: active.id,
      description,
      date,
      time,
    });

    return res.status(201).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 201,
      message: "Data berhasil ditambahkan",
      data: create,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createReport;
