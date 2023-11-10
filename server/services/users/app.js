if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const { mongoInit, getDB } = require("./config/mongo");
const app = express();
const router = require("./routes");
const errHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(errHandler);
mongoInit()
  .then(() => {
    app.listen(port, () => {
      console.log(`ALFA KW USER  ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
