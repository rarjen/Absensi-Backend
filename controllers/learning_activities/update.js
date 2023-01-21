const { Learning_activities } = require("../../models");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { study_id, teacher_id, status } = req.body;

    if (status) {
      const learning_id = await Learning_activities.findOne({
        where: { study_id },
      });

      const disabledStatus = await Learning_activities.update(
        {
          status: false,
        },
        {
          where: {
            id: learning_id.id,
          },
        }
      );
    }
    const updated = await Learning_activities.update(
      {
        study_id,
        teacher_id,
        status,
      },
      { where: { id } }
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
      message: "Data Berhasil diubah",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
