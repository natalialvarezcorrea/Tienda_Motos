const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const passport = require("passport");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
var methodOverride = require('method-override');


//init

require("./models/db");
require("./passport/local-auth");

app.set("PORT", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mysecretsession",
    resave: false,
    saveUninitialized: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash("signinMessage");
  app.locals.signupMessage = req.flash("signupMessage");
  app.locals.user = req.user;
  console.log(app.locals);
  next();
});

app.use(methodOverride('_method'));

//hbs

app.use(require("./routes"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(app.get("views"), "partials"),
    layoutsDir: path.join(app.get("views"), "layout"),
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");

app.use(express.json());
//rutas
app.use(require("./routes/index.route"));
app.use(require("./routes/usuario.routes"));
app.use(require("./routes/Motos.routes"));
app.use(require("./routes/index"));
app.use(require("./routes/signin"));
app.use(require("./routes/signup"));
app.use(require("./routes/compra"));
app.use(require("./routes/compraFormulario"));
app.use(require("./routes/login.route"));

// Static files
app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/api", (req, res) => {
  res.json({ api: "works!" });
});

app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
