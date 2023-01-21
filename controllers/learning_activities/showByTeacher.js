const { Learning_activities, Studies, Teachers } = require("../../models");

const showByTeacher = async (req, res, next) => {
  try {
    const { teacher_id } = req.params;
    const data = await Learning_activities.findOne(
      {
        include: [
          {
            model: Studies,
            as: 'study'
          },
          {
            model: Teachers,
            as: 'teacher'
          }
        ]
      },
      { where: { teacher_id } }
    );

    if (data <= 0) {
      return res.status(404).json({
        jsonapi: {
          version: "1.0",
        },
        meta: {
          author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
          copyright: "2022 ~ BE JavaScript Binar Academy",
        },
        status: 404,
        message: "Data belum Ada",
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
      message: "Data Berhasil ditampilkan",
      data: {
        study_name: data.study.name,
        teacher_name: data.teacher.name
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = showByTeacher;
