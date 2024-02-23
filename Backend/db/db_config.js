const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user:"root",
    password:"Aventador$26",
    database:"movies",
})

connection.connect((err)=>{
    if(err){
        console.log(`Database Error: ${err}`);
    }
    else{
        console.log(`Database connection successful`);
    }
});

module.exports = {connection};