const { Classes } = require("../../models");

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Classes.delete({ where: { id } });
    return res.status(200).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 200,
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    next(error);
  }
};


module.exports = destroy;