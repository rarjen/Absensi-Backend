const { Presences } = require("../../models");
const { Op } = require("sequelize");

const update = async (req, res, next) => {
  try {
    const { official_report_id, student_id, status } = req.body;

    const updated = await Presences.update(
      { status },
      { where: { [Op.and]: [{ official_report_id }, { student_id }] } }
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

module.exports = update;
