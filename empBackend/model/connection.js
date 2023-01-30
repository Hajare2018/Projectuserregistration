const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"comtask"
})

connection.connect((err)=>{
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log("Database connected")
    }
})

module.exports = connection;