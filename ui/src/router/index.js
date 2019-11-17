import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";

// Admin
import UserRole from "@/views/Admin/UserRole/Index";
import UserRoleShow from "@/views/Admin/UserRole/Show";

import School from "@/views/Admin/School/Index";
import SchoolCreate from "@/views/Admin/School/Create";
import SchoolShow from "@/views/Admin/School/Show";

// Dashboard
import Dashboard from "@/views/Dashboard/Index";

import Teacher from "@/views/Dashboard/Teacher/Index";
import TeacherCreate from "@/views/Dashboard/Teacher/Create";
import TeacherShow from "@/views/Dashboard/Teacher/Show";

import User from "@/views/Dashboard/User/Index";
import UserShow from "@/views/Dashboard/User/Show";

import Student from "@/views/Dashboard/Student/Index";
import StudentCreate from "@/views/Dashboard/Student/Create";
import StudentShow from "@/views/Dashboard/Student/Show";

import AcademicStudent from "@/views/Dashboard/AcademicStudent/Index";
import GradeStudent from "@/views/Dashboard/AcademicStudent/Grade";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "*", redirect: "/" },

    // User
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },

    // Admin
    {
      path: "/roles",
      name: "roles",
      component: UserRole
    },
    {
      path: "/roles/:_id",
      name: "role-show",
      component: UserRoleShow
    },
    {
      path: "/schools",
      name: "schools",
      component: School
    },
    {
        path: "/schools-create",
        name: "schools-create",
        component: SchoolCreate
    },
    {
      path: "/schools/:_id",
      name: "school-show",
      component: SchoolShow
    },

    // Dashboard
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/teachers",
        name: "teachers",
        component: Teacher
    },
    {
        path: "/teachers-create",
        name: "teachers-create",
        component: TeacherCreate
    },
    {
        path: "/teachers/:_id",
        name: "teacher-show",
        component: TeacherShow
    },
    {
        path: "/students",
        name: "students",
        component: Student
    },
    {
        path: "/students-create",
        name: "students-create",
        component: StudentCreate
    },
    {
        path: "/students/:_id",
        name: "student-show",
        component: StudentShow
    },
    {
        path: "/academic-students",
        name: "academic-students",
        component: AcademicStudent
    },
    {
        path: "/grade-students",
        name: "grade-students",
        component: GradeStudent
    },
    {
        path: "/users",
        name: "users",
        component: User
    },
    {
        path: "/users/:_id",
        name: "show",
        component: UserShow
    }
  ]
});
