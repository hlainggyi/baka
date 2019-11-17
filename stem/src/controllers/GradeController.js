const {Grade, School, SchoolLevel} = require('../models')

module.exports = {
  // async index (req, res) {
  //   try {
  //     const school = await School.findById({_id: req.user.school})
  //     const schoolLevel = await SchoolLevel.findById({_id: school.level}).populate('grade')
  //     const grades = await Grade.find().where({no: {$lte: schoolLevel.grade.no}});
  //     res.send({
  //       headers: req.headers,
  //       grades: grades
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to show the Grades'
  //     })
  //   }
  // },
  async index (req, res) {
    try {
      const grades = await Grade.find()
      res.send({
        grades: grades
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Grades'
      })
    }
  },
  async show (req, res) {
    try {
      const grade = await Grade.findById({ _id: req.params.gradeId })
      res.send({
        grade: grade
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Grades'
      })
    }
  },
  async post (req, res) {
    try {
      const grade = await Grade.create(req.body)
      res.send({
        grade: grade
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the Grade'
      })
    }
  },
  // async put (req, res) {
  //   try {
  //     const grade = await Grade.update({ _id: req.params.gradeId }, req.body)
  //     res.send({
  //       grade: grade
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to update the Grade'
  //     })
  //   }
  // },
  // async remove (req, res) {
  //   try {
  //     const grade = await Grade.remove({ _id: req.params.gradeId })
  //     res.send("success deleted")
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to delete the Grade'
  //     })
  //   }
  // }
}
