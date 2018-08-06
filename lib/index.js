const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();
app.use(express.static('build'));
app.use('/api', proxy('117.78.28.112:3000'));
app.use('/video', proxy('117.78.28.237:15301'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
