const { Users, Teachers } = require("../../models");

const show = async (req, res, next) => {
  try {
    
    const data = await Users.findAll({
      include: [
        {
          model: Teachers,
          as: 'teacher'
        }
      ]
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
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = show;
