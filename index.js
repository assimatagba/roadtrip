const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/googleapi" , require('./routes/google'));



const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
