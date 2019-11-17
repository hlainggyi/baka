const { User, School } = require("../models")
module.exports = {
    async index (req, res) {
        try {
            // const user = await req.hearders
            // res.send(user)
            var users = await User.find({'school': req.user.school},{_id:0, __v:0, school:0})
            res.send ({
                users: users
                // user: "User Auth"
            })
        } catch (err) {
            res.status(500).send({
                error: "This is AuthController.index error"
            })
        }
    },
    async register (req, res) {
        try {
            
            // 1. Find the the actual school
            const school = await School.findById({ _id: req.user.school });

            // 2. Create a new user
            const user = await req.body
            const setUser = {            
                username: user.username,
                email: user.email,
                password: user.password,
                school: req.user.school,
                role: user.role                
            }
            
            const addUser = await User.create(setUser)

            // 3. Add newly created user to the actual school
            school.users.push(addUser);
            
            await school.save();

            res.send({
                saved : true,
                message: "Create School Successfully"
            })
        } catch (err) {
            res.status(500).send({
                error: "This is Register"
            })
        }
    },
    async login (req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            const school = await School.findOne({ _id: user.school },{ _id:0, name:1, slogram:1, description:1})
            res.send({ user, school, token})
        } catch (e) {
            res.status(400).send()
        }
    }
}