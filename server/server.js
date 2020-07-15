const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/api-routes.js"));


app.listen(PORT, (req, res) => {
  console.log(`App is listening on PORT: http://localhost:${PORT}`);
});
