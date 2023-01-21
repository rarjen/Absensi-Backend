const { Studies } = require("../../models");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, class_id } = req.body;
    const exist = await Studies.findOne({ where: { name, class_id } });
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
        message: "Data duplikat",
      });
    }

    const updated = await Studies.update({ name, class_id }, { where: { id } });
    return res.status(200).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 201,
      message: "Data berhasil diubah",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
