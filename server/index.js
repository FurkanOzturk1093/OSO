const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const auidenceRouter = require("./router/audince.js");
const tagsRouter = require("./router/tags.js");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

// set routes
app.use("/api/audience", auidenceRouter);
app.use("/api/tags", tagsRouter);

// check db connection
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
