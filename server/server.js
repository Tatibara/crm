const path = require('path');
const express = require('express');

const app = express(); // express application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // middleware
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Example app listening on port 3000!'));
