const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "src/public")));

app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" })); // Sử dụng .hbs làm phần mở rộng
app.set("view engine", "hbs");
app.set("views", "./views");

app.set("views", path.join(__dirname, "src/views"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
    message: "Welcome to the Home Page",
  });
});

app.get("/news", (req, res) => {
  res.render("news", {
    title: "News Page",
    message: "Latest news on this page",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
