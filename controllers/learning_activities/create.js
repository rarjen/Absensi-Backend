const { Learning_activities } = require("../../models");

const create = async (req, res, next) => {
  try {
    const { study_id, teacher_id, status = 1 } = req.body;

    const exist = await Learning_activities.findOne({
      where: { study_id, teacher_id },
    });
    if (exist) {
      return res.status(409).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 409,
        message: "Data Sudah Ada",
      });
    }

    const response = await Learning_activities.create({
      study_id,
      teacher_id,
      status,
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
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
