const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://natalia:n12345678@cluster0-nbv13.mongodb.net/motos?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )

  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
