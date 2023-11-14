if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes");
const errHandler = require("./middleware/errorHandler");
const port = Number(process.env.PORT) || 4002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(errHandler);

app.listen(port, () => {
  console.log(`ALFA KW APP ${port}`);
});

// module.exports = app
