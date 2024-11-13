
# Node.js x MySQL


<div align="center" style="border-radius: 12px">
  <img src="sql.png" alt="sql-Lord" width="100%" style="border-radius: 12px">
</div>

<div>
<h2 align="center">Hear the call of the CRUD-lord! 👋</h2>
</div>

## Setup

First step is to initiate a server that requires

```bash
  npm init -y
```

Install required packages (dotenv is optional but highly recommended)

```bash
  npm i mysql express cors dotenv
```

Middleware and imports
```bash
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
```
Run XAMP's Apache and MySQl
<div align="center" style="border-radius: 12px">
  <img src="Xamp.PNG" alt="sql-Lord" width="100%" style="border-radius: 12px">
</div>

Configure the mySQL connection
```bash
  mysql.createConnection(
  {
    host:"localhost",
    user:"root",
    password:'',
    database:"krishibid_xamp"
  }
)
```
Create an API , check whether the port is running properly , using nodemon index.js or node index.js from terminal
```bash
app.get('/', (req, res) => {
  res.send('Krishi XAMP Server is Running')
})
```
## Postman Tester
Use the following routes , in post man for backend queries

### GET REQUESTS
```bash
/news
```
if you are testing local
```bash
http://localhost:5000/news
```
##### Table used
```bash
news_api
```

### Get news Details 
```bash
/article/:id
```
if you are testing local
```bash
http://localhost:5000/article/:id
```
##### Table used
```bash
news_api, news_article , news_gallery, news_seo 
```

### Post News JSON from Panel
```bash
/post/news
```
if you are testing local
```bash
http://localhost:5000/post/news
```
##### Table used
```bash
news_api, news_article , news_gallery, news_seo 
```

## API Routes with Frontend

### Get all News for UI only
#### Fetch for news UI grid, send req to /news
```bash
const BASE_SQL_URL = import.meta.env.VITE_SQL_SERVER
const NEWS_SQL_API = BASE_API_URL + "/news"
```

#### Fetch Specific News for NewsDetails Page /article/:id
```bash
const BASE_SQL_URL = import.meta.env.VITE_SQL_SERVER
const NEWS_ARTICLE_API = BASE_API_URL + "/article"
const SpecificNewsAPI = `${NEWS_ARTICLE_API}/${id}`;
```



### Post News JSON from Panel

#### Post a news to backend, send req to /post/news
```bash
const BASE_SQL_URL = import.meta.env.VITE_SQL_SERVER
const NEWS_SQL_API = BASE_API_URL + "/post/news"
```
