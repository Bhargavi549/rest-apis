const mysql = require('mysql2');

var mysqlconnection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'root',
  database:'mydb1'
})

mysqlconnection.connect((err)=>{
  if(err){
    console.log('internal server error');
  }else{
    console.log('connection established sucessfully');
  }
})
module.exports = mysqlconnection;



