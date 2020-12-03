const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/elhombremasricodebabilonia', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then((db) => console.log("base de datos conectada", db.connection.host))
.catch((err) => console.error(err));
