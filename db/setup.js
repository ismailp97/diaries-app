require('dotenv').config();
const fs = require('fs');
const db = require('./connect');
const sql = fs.readFileSync('../db/diaries.sql').toString();

db.query(sql)
    .then(data => {
        db.end();
        console.log("Set-up complete.")
    })
    .catch(error => console.log(error));
