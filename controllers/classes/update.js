const { Classes } = require("../../models");

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const exist = await Classes.findOne({ where: { name } });
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

    await Classes.update({ name }, { where: id });
    
    return res.status(201).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 409,
      message: "Data berhasil dirubah",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
