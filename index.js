const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());

mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:'',
    database:"krishibid_xamp"
  }
)

app.get('/', (req, res) => {
  res.send('Krishi XAMP Server is Running')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })