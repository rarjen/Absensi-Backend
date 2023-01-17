const { Academic_years } = require("../../models");

const updateActivity = async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const { study_id, teacher_id, status } = req.body;

    const updated = await Academic_years.update(
      { study_id, teacher_id, status },
      { where: { study_id: studyId } }
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

module.exports = updateActivity;
