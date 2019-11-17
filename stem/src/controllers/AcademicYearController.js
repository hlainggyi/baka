const { AcademicYear } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const years = await AcademicYear.find({}, {__v: 0 }).sort({_id: -1})
      res.send({
        years: years
      })
    } catch (err) {
      res.status(500).send({
        error: "This is Academic Year index error"
      })
    }
  },
  async post (req, res) {
    try { 
      const academicYear = await AcademicYear.create(req.body)
      res.send({
        academicYear: academicYear
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the Academic Year'
      })
    }
  }

}
