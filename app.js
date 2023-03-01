const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// Application level middleware
app.use((req, res, next) => {
  console.info(Date.now());
  next();
});

app.get("/", (req, res) => {
  const person = [
    {
      nama: "Adi Ifai",
      email: "adiifai@gmail.com",
    },
    {
      nama: "Acumalaka",
      email: "acumalaka@gmail.com",
    },
    {
      nama: "Tuan Buas",
      email: "tuanbuas@gmail.com",
    },
  ];
  res.render("index", { nama: "Adi Ifai", title: "Halaman Home", person, layout: "layouts/main" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About", layout: "layouts/main" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Halaman Contact", layout: "layouts/main" });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br /> Category: ${req.query.category}`);
});

app.use((req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
