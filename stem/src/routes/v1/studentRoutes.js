// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Student
  // Student Route
    /** name, position, nrc, school_id */
    app.get("/v1/students", Mid.isAuth, Ctrl.StudentController.index)
    app.post("/v1/students", Mid.isAuth, Mid.isRole('developer', 'admin'), Mid.Student.create, Ctrl.StudentController.post)
    app.get("/v1/students/:studentId", Mid.isAuth, Ctrl.StudentController.show)
    app.put("/v1/students/:studentId", Mid.isAuth, Mid.isRole('developer', 'admin'), Ctrl.StudentController.put)
    app.delete("/v1/students/:studentId", Ctrl.StudentController.remove)

    // Student Route
    /** name, position, nrc, school_id */
    // app.get("/v1/grades", Ctrl.Student.index)
    // app.post("/v1/:schoolId/grades", Mid.Student.create, Ctrl.Student.post)
    // app.get("/v1/:schoolId/grades/:gradeID", Ctrl.Student.show)
    // app.put("/v1/:schoolId/grades/:gradeID", Ctrl.Student.put)
    // app.delete("/v1/:schoolId/grades/:gradeID", Ctrl.Student.remove)


}
