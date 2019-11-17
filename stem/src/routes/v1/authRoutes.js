const Ctrl = require("../../controllers")
const Mid = require("../../middlewares")

// 1-isAuth 
// 2-isRole


module.exports = (app) => {
    app.get('/v1/users', Mid.isAuth, Ctrl.AuthController.index)
    app.post('/v1/login', Ctrl.AuthController.login)
    app.post('/v1/register', Mid.isAuth, Mid.Auth.create, Ctrl.AuthController.register)
}