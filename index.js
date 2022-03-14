const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors
app.use(cors());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
