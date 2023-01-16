const { Official_reports, Academic_years, Learning_activities, Studies, Classes, Students } = require("../../models");

const createReport = async (req, res, next) => {
  try {
    const { learning_activity_id, description, date, time } = req.body;
    const response = await Official_reports.findAll(
      {
        include: [
          {
            model: Learning_activities,
            as: "activity",
            attributes: ["id", "study_id", "teacher_id", "status"],
            include: [
              {
                model: Studies,
                as: 'study',
                include: [
                  {
                    model: Classes,
                    as: 'class',
                    include: [
                      {
                        model: Students,
                        as: 'student'
                      }
                    ]
                  }
                ]
              }
            ]
          },
        ],
      }
    );
    console.log(response);
    return res.json(response);
    // const active = await Academic_years.findOne({ where: { status: true } });

    // const create = await Official_reports.create({
    //   learning_activity_id,
    //   academic_year_id: active.id,
    //   description,
    //   date,
    //   time,
    // });
    


    // return res.status(201).json({
    //   jsonapi: {
    //     version: "1.0",
    //   },
    //   meta: {
    //     author: "Muhammad Umar Mansyur & Otniel Kevin Abiel",
    //     copyright: "2022 ~ BE JavaScript Binar Academy",
    //   },
    //   status: 201,
    //   message: "Data berhasil ditambahkan",
    //   data: create,
    // });
  } catch (error) {
    next(error);
  }
};

module.exports = createReport;
