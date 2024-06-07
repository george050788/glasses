import mysql from 'mysql2'
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database: 'coding',
  port: 3306
})
connection.connect()

connection.query('select * from user_tb', function (err, results, fields) {
  if (err) throw err
  console.log(results)
})