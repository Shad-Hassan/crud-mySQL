const express = require("express");
const cors = require("cors");
const newsRoutes = require("./routes/newsRoutes");
const articleRoutes = require('./routes/articleRoutes');
const postRoutes = require('./routes/postRoutes');
const clientRoutes = require('./routes/clientRoutes');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/news", newsRoutes);
app.use('/article', articleRoutes);
app.use("/post", postRoutes);
app.use("/client", clientRoutes);


app.get("/", (req, res) => {
  res.send("Krishi XAMP Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
