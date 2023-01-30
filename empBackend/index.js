const express = require("express");
const { attendance_routes } = require("./routes/attendance.routes");
const app = express();
app.use(express.json());

const port = 5005;

app.use("/", attendance_routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
