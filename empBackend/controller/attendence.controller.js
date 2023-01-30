const connection = require("../model/connection");

let get_data = async (req, res) => {
  try {
    let SqlQuerry = "SELECT * FROM attendance";

    await connection.query(SqlQuerry, (err, result) => {
      if (err) {
        return res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let post_data = async (req, res) => {
  try {
    let data = req.body;
    let SqlQuerry = "INSERT INTO attendance set ?";

    await connection.query(SqlQuerry, data, (err, result) => {
      if (err) {
        return res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let delete_data = async (req, res) => {
  try {
    let data = req.params.emp_id;
    let SqlQuerry = "DELETE FROM attendance WHERE emp_id = ?";

    await connection.query(SqlQuerry, data, (err, result) => {
      if (err) {
        return res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let get_by_name_date = async (req, res) => {
    try {

      let SqlQuerry = "SELECT name,date from attendance where date BETWEEN '2023-01-01' AND '2023-01-30'";
  
      await connection.query(SqlQuerry, (err, result) => {
        if (err) {
          return res.send({ status: 400, Error: err.sqlMessage });
        } else {
          res.send({ status: 200, response: result });
        }
      });
    } catch (err) {
      res.send({ status: 400, Error: err.sqlMessage });
    }
  };


module.exports = { get_data, post_data, delete_data,get_by_name_date };
