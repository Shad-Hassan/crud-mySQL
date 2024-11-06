const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors());

const db = mysql.createConnection(
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

app.get('/news',(req, res) => {
  const sql = "SELECT * FROM news_api";
  db.query(sql , (err,data) => {
    if(err) return app.json("Error");
    return res.json(data);
  })

})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })