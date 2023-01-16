const { Academic_years } = require('../../models');


const create = async (req, res, next) => {
    try {
        const { year, semester, status = 0 } = req.body;
        
        const response = await Academic_years.create({
            year, semester, status
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
            data: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = create;