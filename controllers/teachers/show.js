const { Users, Teachers } = require("../../models");

const show = async (req, res, next) => {
  try {
    const user = req.user;
    const showTeachers = await Users.findOne({
      where: { id: user.id },
      include: [
        {
          model: Teachers,
          as: "teacher",
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
      data: {
        user_id: user.id,
        username: showTeachers.username,
        thumbnail: showTeachers.thumbnail,
        teacher_id: showTeachers.teacher.id,
        name: showTeachers.teacher.name,
        address: showTeachers.teacher.address,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = show;
