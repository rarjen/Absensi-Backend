const { Learning_activities } = require("../../models");

const createAcademicYear = async (req, res, next) => {
  try {
    const { study_id, teacher_id, status } = req.body;

    const create = await Learning_activities.create({
      study_id,
      teacher_id,
      status,
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
      message: "Data berhasil ditambahkan",
      data: create,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createAcademicYear;
