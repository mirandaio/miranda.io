const express = require('express');
const { PORT = 8000 } = process.env;

const app = express();

app.use('/static', express.static('build/static'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: 'build'
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
