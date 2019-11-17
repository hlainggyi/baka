const Ctrl = require("../../controllers")
const Mid = require("../../middlewares")

module.exports = (app) => {
    app.get('/v1/schools', Mid.isAuth, Mid.isRole('admin', 'manager', 'editer', 'developer'), Ctrl.SchoolController.index)
    app.post('/v1/schools', Mid.isAuth, Mid.isRole('admin', 'developer'), Mid.School.create, Ctrl.SchoolController.post)
    app.get('/v1/schools/show', Mid.isAuth, Ctrl.SchoolController.show)

    // Grade Route
    app.get('/v1/grades', Mid.isAuth, Ctrl.GradeController.index)
    app.post('/v1/grades', Mid.isAuth, Mid.isRole('developer'), Ctrl.GradeController.post)
    
    // School Level Route 
    app.get('/v1/school-levels', Mid.isAuth, Ctrl.SchoolLevelController.index)
    app.post('/v1/school-levels', Mid.isAuth, Mid.isRole('developer'), Ctrl.SchoolLevelController.post)

}