const { Learning_activities, Teachers, Studies } = require("../../models");

const showByStudyId = async (req, res, next) => {
  try {
    const { study_id } = req.params;
    const showActivities = await Learning_activities.findAll({
      where: { study_id },
      include: [
        {
          model: Teachers,
          as: "teacher",
        },
        {
          model: Studies,
          as: "study",
        },
      ],
    });

    if (showActivities <= 0) {
      return res.status(400).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 400,
        message: "Data Activities Year Tidak Ada",
      });
    }

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
      data: showActivities,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = showByStudyId;
