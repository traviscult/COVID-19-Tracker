const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.PORT || 3002;
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/api-routes.js"));
app.use(session({
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

app.listen(PORT, (req, res) => {
  console.log(`App is listening on PORT: http://localhost:${PORT}`);
});
