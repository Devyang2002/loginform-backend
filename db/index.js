const mysql = require('mysql');
const dotenv = require('dotenv').config();

// configuration for createConnection function 
const connection = mysql.createConnection({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    waitForConnection: true,
    connectionTimeOut: 3000,
});

// function to connect to the database
connection.connect((error) => {
    if(error){
        console.log(`new error ${error}`);
        return;
    }
    console.log(`Database connected ${connection.threadId}`)
})

module.exports = connection;