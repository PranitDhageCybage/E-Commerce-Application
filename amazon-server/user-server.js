const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
const www = process.env.WWW || "./";

app.use(express.static(www));

console.log(`serving ${www}`);

app.get("/", (req, res) => {
  res.sendFile(`index.html`, { root: www });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
