const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = {
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      role: Joi.string().required()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid name error.'
          })
          break;
          case 'email':
            res.status(400).send({
              error: 'Require Email'
            })
            break;
          case 'password':
            res.status(400).send({
              error: 'Require Password'
            })
            break;
          case 'role':
            res.status(400).send({
              error: 'Require role'
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
