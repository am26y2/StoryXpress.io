const express = require("express");
const cors = require("cors");

var sql = require("mssql");
var request = new sql.Request();
const app = express();
// query
const selectAllMovies = `SELECT * FROM movies`;

app.use(cors());
var config = {
  user: "am26y2",
  password: "Amit@1234",
  server: "am26y2.database.windows.net",
  database: "Movie",
};
sql.connect(config, function (err) {
  if (err) {
    console.log("DB Not Connected");
  } else {
    console.log("DB Connected");
  }
});
var request = new sql.Request();
app.get("/",(req, res) => {
  request.query("select top 10 * from movies", function (err, recordset) {
    if (err) console.log(err);
    console.log(recordset);
    res.send(recordset);
  });
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
