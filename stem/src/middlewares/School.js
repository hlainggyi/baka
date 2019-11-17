const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = {
      name: Joi.string().min(3).max(30).required(),
      slogram: Joi.string().min(3).max(30).required(),
      description: Joi.string().min(3).max(30).required(),
      level: Joi.string(),
      users: Joi.string(),
      logo: Joi.string()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name error.'
          })
          break;
        case 'slogram':
          res.status(400).send({
            error: 'You must provide a valid slogram error'
          })
          break;
          case 'description':
            res.status(400).send({
              error: 'You must provide a valid description error'
            })
            break;
          case 'level':
            res.status(400).send({
              error: 'You must provide a valid School Level error'
            })
            break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
