const {School, User, Role} = require('../models')
// const School  = require('../models/School')

module.exports = {
  async index (req, res) {
    try {
      const schools = await School.find({}, {
        users: 0, _id: 0
      }).sort({"date": -1})
      res.send({
        schools: schools
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Schools'
      })
    }
  },
  async show (req, res) {
    try {
      const school = await School.findById({ _id: req.user.school}).populate('users')
      res.send({
        school: school
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Schools'
      })
    }
  },
  async post (req, res) {
    try {
      // 1. Check email
      const user = await User.findOne({email: req.body.email}).exec();
      
      if (user != null) {
        if(user.email == req.body.email) {
          res.status(500).send({
            error: `Your email: ${req.body.email} has already been registered`
          })
        } 
      } else {
        // 2. Create School
        const school = await School.create(req.body)
        // 3. Find role
        const role = await Role.findOne({name: 'admin'}).exec();

        // 4. Create a new user
        const newUser = {
          username: "admin",
          email: req.body.email,
          password: "password",
          school: school._id,
          role: role._id
        }     
        const addUser = await User.create(newUser)
          // 3. Add newly created user to the actual school
        school.users.push(addUser)
        await school.save();
      }      
      
      res.send({
        saved : true,
        message: "Create School Successfully"
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the School'
      })
    }
  },

  // // School new Create { url in not schoolId}
  // async create (req, res) {
  //   try {
  //     // 1. Check email
  //     const user = await User.findOne({email: req.body.email}).exec();
      
  //     if (user != null) {
  //       if(user.email == req.body.email) {
  //         res.status(500).send({
  //           error: `Your email: ${req.body.email} has already been registered`
  //         })
  //       } 
  //     }

  //     // 2. Create School
  //     const school = await School.create(req.body)
  //     // 3. Find role
  //     const role = await Role.findOne({name: 'Mananger'}).exec();

  //     // 4. Create a new user
  //     const newUser = {
  //       name: "admin",
  //       email: req.body.email,
  //       password: "password",
  //       school: school._id,
  //       role: role._id
  //     }     
  //     const addUser = await User.create(newUser)

  //     // 5. Add newly created user to the actual school
  //     school.users.push(addUser)
  //     await school.save();
  //     res.send({
  //       saved : true,
  //       message: "Create School Successfully"
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to create the School'
  //     })
  //   }
  // },
  // async put (req, res) {
  //   try {
  //     const school = await School.update({ _id: req.params.schoolId }, req.body)
  //     res.send({
  //       school: school
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to update the School'
  //     })
  //   }
  // },
  // async remove (req, res) {
  //   try {
  //     await school.remove({ _id: req.params.schoolId })
  //     res.send("success deleted")
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to delete the School'
  //     })
  //   }
  // }
}
