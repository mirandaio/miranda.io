const express = require('express');
const { PORT = 8000 } = process.env;

const server = express();

server.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: 'dist'
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
