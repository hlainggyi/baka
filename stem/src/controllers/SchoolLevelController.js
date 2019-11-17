const {SchoolLevel} = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const schoolLevels = await SchoolLevel.find().sort({"date": -1})
      res.send({
        schoolLevels: schoolLevels
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the SchoolLevels'
      })
    }
  },
  async show (req, res) {
    try {
      const schoolLevel = await SchoolLevel.findById({ _id: req.params.schoolLevelId })
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the SchoolLevels'
      })
    }
  },
  async post (req, res) {
    try {
      const schoolLevel = await SchoolLevel.create(req.body)
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the SchoolLevel'
      })
    }
  },
  async put (req, res) {
    try {
      const schoolLevel = await SchoolLevel.update({ _id: req.params.schoolLevelId }, req.body)
      res.send({
        schoolLevel: schoolLevel
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the SchoolLevel'
      })
    }
  },
  async remove (req, res) {
    try {
      await schoolLevel.remove({ _id: req.params.schoolLevelId })
      res.send("success deleted")
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the SchoolLevel'
      })
    }
  }
}
