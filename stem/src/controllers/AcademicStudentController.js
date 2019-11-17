const { AcademicStudent, Student } = require('../models')

module.exports = {
  async index (req, res ) {
    try {
      const matchSchool = req.params.schoolId
      const matchYear = req.query.yearId
      const students = await AcademicStudent.aggregate([
        // State 1
        { $match: { $and: [
          { matchSchool: matchSchool},
          { matchYear: matchYear},
          { isActive: 1},
          {status: "Wait"}
        ] }},

        // State 2
        { $group :  {
            _id: { grade: "$gradeId", gender: "$gender"},
            count: {$sum: 1 }
          } 
        },

        // State 3
        { $project:  { 
          gradeId: "$_id.grade", grade: "$grade", gender: "$_id.gender", count: "$count",
          _id: 0
         }}
      ])

      const groupBy = key => array =>
        array.reduce(
          (objectsByKeyValue, obj) => ({
            ...objectsByKeyValue,
            [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
          }),
          {}
        );
      const groupByGrade = groupBy('gradeId');

      res.send({
        students: groupByGrade(students)
      })
      
    } catch (err) {
      res.status(500).send({
        error: "This is Academic Year index error"
      })
    }
  },

  async gradeStudents (req, res ) {
    try {
      const matchSchool = req.params.schoolId
      const matchYear = req.query.yearId
      const matchGrade = req.query.gradeId
      const students = await AcademicStudent.aggregate([
        // State 1
        { $match: { $and: [
          { matchSchool: matchSchool},
          { matchYear: matchYear},
          { matchGrade: matchGrade},
          { isActive: 1},
          {status: "Wait"}
        ] }},

        // // State 2
        // { $group :  {
        //     _id: { grade: "$gradeId", gender: "$gender"},
        //     count: {$sum: 1 }
        //   } 
        // },

        // State 3
        { $project:  { 
            name: "$name",
            fatherName: "$fatherName"
            // gender: "$gender", 
            // status: "$status"
            // _id: 0
        }}
      ])

      res.send({
        students: students
      })
      
    } catch (err) {
      res.status(500).send({
        error: "This is Academic Year index error"
      })
    }
  },

  async getStudents (req, res ) {
    try {
      var matchSchool = req.params.school;
      
      // var gradeId = req.body.grade;
      var matchGrade = req.body.gradeId;
      var matchYear = req.body.yearId;
      // var academicYearId = req.body.yearId;
      const students = await AcademicStudent.aggregate([
        
        // State 1
        { $match: { $and: [
                            { matchSchool: matchSchool},
                            { matchGrade: matchGrade},
                            { matchYear: matchYear},
                            { isActive: 1},
                            {status: "Wait"}
                          ] }},

        // State 2
        {
          $lookup:
            {
              from: "grades",
              localField: "gradeId",
              foreignField: "_id",
              as: "student_grade"
            }
       },
        {
          $lookup:
            {
              from: "students",
              localField: "studentId",
              foreignField: "_id",
              as: "nwesudent"
            }
        },
        { $project: { 
            name: 1, 
            fatherName: 1, 
            status: 1, 
            gender: 1, 
            student_grade: 1,
            newstudent: { name: 1, fatherName: 1}
          } 
        }

      ])
      // const students = await AcademicStudent.find({})
      res.send({
        students: students
      })
    } catch (err) {
      res.status(500).send({
        error: "This is Academic Year index error"
      })
    }
  },
  async post (req, res) {    
    try { 
      const student = await Student.findById({_id: req.body.student});
      const data = {
        yearId: req.body.academicYearId,
        // year: req.params.academicYearId,
        schoolId: req.params.schoolId,
        // school: req.params.schoolId,
        gradeId: req.body.gradeId,
        // grade: req.body.gradeId,
        studentId: req.body.studentId,
        // student: student._id,
        name: req.body.name,
        fatherName: req.body.fatherName,
        gender: req.body.gender,
        status: "Wait",
        isActive: 0
      };
      const addStudent = await AcademicStudent.create(data)
      res.send({
        student: addStudent
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the Academic Year'
      })
    }
  }

}
