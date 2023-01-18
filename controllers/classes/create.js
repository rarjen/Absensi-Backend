const { Classes } = require('../../models');


const create = async (req, res, next) => {
    try {
        const { name } = req.body;

        const exist = await Classes.findOne({ where: { name }});
        if(exist) {
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

        const classes = await Classes.create({
            name
        });

        return res.status(201).json({
            jsonapi: {
                version: '1.0'
            },
            meta: {
                author: 'Muhammad Umar Mansyur & Otniel Kevin Abiel',
                copyright: '2022 ~ BE JavaScript Binar Academy'
            },
            status: 201,
            message: 'Data berhasil ditambahkan',
            data: classes
        });
    } catch (error) {
        next(error);
    }
}


module.exports = create;