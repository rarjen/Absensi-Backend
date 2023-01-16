const { Teachers, Users } = require("../../models");

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const { username, password, thumbnail, name, address } = req.body;

    const person = await Users.create({
      username, password, thumbnail
    });

    const teacher = await Teachers.create({
      user_id: person.id,
      name,
      address,
    });

    return res.status(201).json({
      jsonapi: {
        version: "1.0",
      },
      meta: {
        author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
        copyright: "2022 ~ BE JavaScript Binar Academy",
      },
      status: 201,
      message: "Data berhasil ditambahkan",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
