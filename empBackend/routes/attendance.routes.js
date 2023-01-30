const express = require("express");
const { get_data, post_data, delete_data, get_by_name_date } = require("../controller/attendence.controller");

const attendance_routes = express.Router();

attendance_routes.get("/api/attend-get",get_data)
attendance_routes.post("/api/attend-post",post_data)
attendance_routes.delete("/api/attend-delete/:emp_id",delete_data)
attendance_routes.get("/api/attend-name-date",get_by_name_date)

module.exports = {attendance_routes}