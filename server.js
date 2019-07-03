const express = require('express');
const { PORT = 8000 } = process.env;

const app = express();

app.use('/static', express.static('dist/static'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {
    root: 'dist'
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
