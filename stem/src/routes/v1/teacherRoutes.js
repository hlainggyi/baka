// Controller
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Teacher
  // Teacher Route
    /** name, position, nrc, school_id */
    app.get("/v1/teachers", Mid.isAuth, Ctrl.TeacherController.index)
    app.post("/v1/teachers", Mid.isAuth, Mid.isRole('developer', 'admin'), Mid.Teacher.create, Ctrl.TeacherController.post)
    app.get("/v1/teachers/:teacherId", Ctrl.TeacherController.show)
    app.put("/v1/teachers/:teacherId", Mid.isAuth, Mid.isRole('developer', 'admin'),  Ctrl.TeacherController.put)
    app.delete("/v1/teachser/:teacherId", Ctrl.TeacherController.remove)
}
